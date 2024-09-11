import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

// Material Dashboard 2 PRO React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';

// Material Dashboard 2 PRO React examples
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';

// Wizard page components
import About from 'layouts/applications/wizard/components/About';
import Diet from 'layouts/applications/wizard/components/Account'; // Fixed import
import Allergens from 'layouts/applications/wizard/components/Address'; // Fixed import

// Custom styles
const stepperStyles = {
  '& .MuiStepLabel-root': {
    color: '#FF6F00',
  },
  '& .MuiStepLabel-active': {
    color: '#FF8C00',
  },
  '& .MuiStepConnector-line': {
    borderColor: '#FF6F00',
  },
};

const cardStyles = {
  backgroundImage: 'linear-gradient(to bottom right, #FFCC80, #FFE0B2)', // Light gradient
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

const buttonStyles = {
  gradient: {
    backgroundImage: 'linear-gradient(45deg, #FF8C00 30%, #FF6F00 90%)',
    color: '#FFFFFF',
  },
  outlined: {
    color: '#FF6F00',
    borderColor: '#FF6F00',
    '&:hover': {
      borderColor: '#FF8C00',
      color: '#FF8C00',
    },
  },
};

function getSteps() {
  return ["Personal Info", "Diet Preferences", "Common Allergens"];
}

function getStepContent(stepIndex, dataHandlers) {
  switch (stepIndex) {
    case 0:
      return <About {...dataHandlers} />;
    case 1:
      return <Diet {...dataHandlers} />;
    case 2:
      return <Allergens {...dataHandlers} />;
    default:
      return null;
  }
}

function append(allergen, preferences) {
  const preferencesSet = new Set(preferences);
  if (!preferencesSet.has(allergen)) {
    preferencesSet.add(allergen);
  }
  return Array.from(preferencesSet);
}

function Wizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;
  const navigate = useNavigate();

  const handleNext = async () => {
    if (isLastStep) {
      try {
        const list = append(formData.allergen, formData.preferences);
        const response = await axios.post("http://localhost:7000/meal/addPreferences", {
          email: localStorage.getItem('email'),
          phoneNumber: formData.phoneNumber,
          age: formData.age,
          mealType: formData.mealType,
          weight: formData.weight,
          height: formData.height,
          gender: formData.gender,
          preferences: list,
        }, {
          headers: {
            'jwt-token': `${localStorage.getItem('jwtToken')}`
          }
        });
        console.log(response);
        navigate('/analytics');
      } catch (error) {
        console.error("There was an error submitting the form:", error);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  const handleDataChange = (newData) => {
    setFormData(prevData => {
      const updatedData = { ...prevData, ...newData };
      console.log("Updated :", updatedData);
      return updatedData;
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} pb={8}>
        <Grid container justifyContent="center" sx={{ my: 4 }}>
          <Grid item xs={12} lg={8}>
            <MDBox mt={6} mb={8} textAlign="center">
              <MDBox mb={1}>
                <MDTypography variant="h3" fontWeight="bold" color="#FF6F00">
                  Build Your Profile
                </MDTypography>
              </MDBox>
              <MDTypography variant="h5" fontWeight="regular" color="secondary">
                This information will let us customize meals for you.
              </MDTypography>
            </MDBox>
            <Card sx={cardStyles}>
              <MDBox mt={-3} mx={2}>
                <Stepper activeStep={activeStep} alternativeLabel sx={stepperStyles}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </MDBox>
              <MDBox p={2}>
                <MDBox >
                  {getStepContent(activeStep, { handleDataChange })}
                  <MDBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <MDBox />
                    ) : (
                      <MDButton variant="outlined" sx={buttonStyles.outlined} onClick={handleBack}>
                        Back
                      </MDButton>
                    )}
                    <MDButton
                      variant="gradient"
                      sx={buttonStyles.gradient}
                      onClick={handleNext}
                    >
                      {isLastStep ? "Submit" : "Next"}
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Wizard;

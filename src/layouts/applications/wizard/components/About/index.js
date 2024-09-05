import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import FormField from 'layouts/applications/wizard/components/FormField';

// Custom styles
const selectedButtonStyles = {
  backgroundColor: '#FF8C00',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF6F00',
  },
};

const unselectedButtonStyles = {
  backgroundColor: '#FFBE8C',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#FF8C00',
  },
};

function About({ handleDataChange }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBodyFat, setSelectedBodyFat] = useState('');

  useEffect(() => {
    // Notify parent component of initial state
    handleDataChange({
      firstName,
      lastName,
      phoneNumber,
      age,
      weight,
      height,
      gender: selectedGender,
      bodyFat: selectedBodyFat
    });
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    // Notify parent component whenever any field changes
    handleDataChange({
      firstName,
      lastName,
      phoneNumber,
      age,
      weight,
      height,
      gender: selectedGender,
      bodyFat: selectedBodyFat
    });
  }, [firstName, lastName, phoneNumber, age, weight, height, selectedGender, selectedBodyFat]);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleBodyFatSelect = (bodyFat) => {
    setSelectedBodyFat(bodyFat);
  };

  return (
    <MDBox>
      <MDBox width="82%" textAlign="center" mx="auto" my={4}>
        <MDBox mb={1}>
          <MDTypography variant="h5" fontWeight="regular">
            Update Your Information
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          Provide your personal details below. This information will help us tailor your experience.
        </MDTypography>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          {/* Row 1 */}
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <FormField
                type="text"
                label="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <FormField
                type="text"
                label="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </MDBox>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <FormField
                type="text"
                label="Phone Number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <FormField
                type="number"
                label="Age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </MDBox>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <FormField
                type="number"
                label="Weight (kg)"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <FormField
                type="number"
                label="Height (cm)"
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <MDTypography variant="body1">
                Gender
              </MDTypography>
              <ButtonGroup fullWidth>
                <Button
                  sx={selectedGender === 'Male' ? selectedButtonStyles : unselectedButtonStyles}
                  onClick={() => handleGenderSelect('Male')}
                >
                  Male
                </Button>
                <Button
                  sx={selectedGender === 'Female' ? selectedButtonStyles : unselectedButtonStyles}
                  onClick={() => handleGenderSelect('Female')}
                >
                  Female
                </Button>
                <Button
                  sx={selectedGender === 'non-binary' ? selectedButtonStyles : unselectedButtonStyles}
                  onClick={() => handleGenderSelect('non-binary')}
                >
                  Non-binary
                </Button>
              </ButtonGroup>
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDBox mb={2}>
              <MDTypography variant="body1">
                Body Fat Level
              </MDTypography>
              <ButtonGroup fullWidth>
                <Button
                  sx={selectedBodyFat === 'low' ? selectedButtonStyles : unselectedButtonStyles}
                  onClick={() => handleBodyFatSelect('low')}
                >
                  Low
                </Button>
                <Button
                  sx={selectedBodyFat === 'medium' ? selectedButtonStyles : unselectedButtonStyles}
                  onClick={() => handleBodyFatSelect('medium')}
                >
                  Medium
                </Button>
                <Button
                  sx={selectedBodyFat === 'high' ? selectedButtonStyles : unselectedButtonStyles}
                  onClick={() => handleBodyFatSelect('high')}
                >
                  High
                </Button>
              </ButtonGroup>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// Define prop types for the About component
About.propTypes = {
  handleDataChange: PropTypes.func.isRequired,
};

export default About;

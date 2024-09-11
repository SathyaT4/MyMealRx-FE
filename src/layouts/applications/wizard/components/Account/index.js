import React from 'react';
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import PropTypes from 'prop-types';
import dietimg from "assets/images/icons8-diet-96.png"

const containerStyles = {
  background: 'linear-gradient(180deg, #FFFAF0 0%, #FFDEDE 100%)',
    borderRadius: '8px',
  padding: '2rem',
};

const selectedButtonStyles = {
  background: 'linear-gradient(to bottom right, #FF6F00, #FF8C00)', // Gradient background
  color: '#FFFFFF',
  width: '200px',
  height: '150px',
  fontSize: '24px',
  '&:hover': {
    background: 'linear-gradient(to bottom right, #FF8C00, #FF6F00)',
  },
};

const unselectedButtonStyles = {
  background: '#FFF3E0', // Light Orange
  color: '#000000',
  width: '200px',
  height: '150px',
  fontSize: '24px',
  '&:hover': {
    backgroundColor: '#FF6F00',
  },
};

function Diet({ handleDataChange }) {
  const [selectedDiet, setSelectedDiet] = React.useState('');

  const handleDietSelect = (diet) => {
    setSelectedDiet(diet);
    console.log(diet);

    let mealType = '';
    let preferences = [];

    if (diet === 'paleo') {
      mealType = 'Nonveg';
      preferences = [];
    } else if (diet === 'vegan') {
      mealType = 'Veg';
      preferences = ['Dairy', 'Eggs', 'Meat', 'Fish'];
    } else if (diet === 'anything') {
      mealType = 'Nonveg';
      preferences = [];
    } else {
      mealType = 'Veg';
      preferences = ['Meat', 'Fish'];
    }

    handleDataChange({ mealType, preferences });
  };

  return (
    <MDBox sx={containerStyles}>
      <MDBox width="80%" textAlign="center" mx="auto" my={4}>
      <img src={dietimg} alt="Profile" style={{ width: '10%', borderRadius: '8px', marginBottom: '16px' }} />
        <MDBox mb={1}>
          <MDTypography variant="h5" fontWeight="regular">
            What is your dietary preference?
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          Select your dietary preference to help us provide better recommendations.
        </MDTypography>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3} justifyContent="center">
          {/* Paleo Option */}
          <Grid item xs={12} sm={3}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedDiet === 'paleo' ? "contained" : "outlined"}
                onClick={() => handleDietSelect('paleo')}
                sx={selectedDiet === 'paleo' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedDiet === 'paleo' ? "white" : "inherit" }}>local_dining</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Paleo
              </MDTypography>
              <MDTypography variant="body2" color="text">
                Emphasizes whole foods like lean meats, fish, fruits, and vegetables.
              </MDTypography>
            </MDBox>
          </Grid>

          {/* Vegan Option */}
          <Grid item xs={12} sm={3}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedDiet === 'vegan' ? "contained" : "outlined"}
                onClick={() => handleDietSelect('vegan')}
                sx={selectedDiet === 'vegan' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedDiet === 'vegan' ? "white" : "inherit" }}>spa</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Vegan
              </MDTypography>
              <MDTypography variant="body2" color="text">
                Excludes all animal products, including meat, dairy, and eggs.
              </MDTypography>
            </MDBox>
          </Grid>

          {/* Vegetarian Option */}
          <Grid item xs={12} sm={3}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedDiet === 'vegetarian' ? "contained" : "outlined"}
                onClick={() => handleDietSelect('vegetarian')}
                sx={selectedDiet === 'vegetarian' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedDiet === 'vegetarian' ? "white" : "inherit" }}>eco</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Vegetarian
              </MDTypography>
              <MDTypography variant="body2" color="text">
                Avoids meat and fish, but may include dairy and eggs.
              </MDTypography>
            </MDBox>
          </Grid>

          {/* Anything Option */}
          <Grid item xs={12} sm={6}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedDiet === 'anything' ? "contained" : "outlined"}
                onClick={() => handleDietSelect('anything')}
                sx={selectedDiet === 'anything' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedDiet === 'anything' ? "white" : "inherit" }}>more_horiz</Icon>
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Anything
              </MDTypography>
              <MDTypography variant="body2" color="text">
                No specific dietary restrictions or preferences.
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

Diet.propTypes = {
  handleDataChange: PropTypes.func.isRequired,
};

export default Diet;

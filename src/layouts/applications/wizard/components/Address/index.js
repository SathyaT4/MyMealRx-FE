import { useState } from "react";
import PropTypes from 'prop-types';

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Custom styles
const selectedButtonStyles = {
  backgroundColor: '#FF6F00', // Orange
  color: '#FFFFFF',
  width: '120px', // Smaller width
  height: '100px', // Smaller height
  fontSize: '16px', // Smaller font size
  '&:hover': {
    backgroundColor: '#FF8C00', // Darker Orange
  },
};

const unselectedButtonStyles = {
  backgroundColor: '#FFF3E0', // Light Orange
  color: '#000000',
  width: '120px', // Smaller width
  height: '100px', // Smaller height
  fontSize: '16px', // Smaller font size
  '&:hover': {
    backgroundColor: '#FF6F00', // Orange
  },
};

function Allergens({handleDataChange}) {
  const [selectedAllergen, setSelectedAllergen] = useState('');

  const handleAllergenSelect = (allergen) => {
    setSelectedAllergen(allergen);
    handleDataChange({ allergen });
  };

  return (
    <MDBox>
      <MDBox width="80%" textAlign="center" mx="auto" my={4}>
        <MDBox mb={1}>
          <MDTypography variant="h5" fontWeight="regular">
            Do you have any allergies?
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          Select any allergens you need to avoid.
        </MDTypography>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3} justifyContent="center">
          {/* Peanuts Option */}
          <Grid item xs={12} sm={3}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedAllergen === 'Peanuts' ? "contained" : "outlined"}
                onClick={() => handleAllergenSelect('Peanuts')}
                sx={selectedAllergen === 'Peanuts' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedAllergen === 'Peanuts' ? "white" : "inherit" }}>local_offer</Icon> {/* Example icon */}
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Peanuts
              </MDTypography>
              <MDTypography variant="body2" color="text">
                Avoid peanuts and peanut-based products.
              </MDTypography>
            </MDBox>
          </Grid>

          {/* Tree Nuts Option */}
          <Grid item xs={12} sm={3}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedAllergen === 'Tree_nuts' ? "contained" : "outlined"}
                onClick={() => handleAllergenSelect('Tree_nuts')}
                sx={selectedAllergen === 'tree_nuts' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedAllergen === 'Tree_nuts' ? "white" : "inherit" }}>ac_unit</Icon> {/* Example icon */}
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Tree Nuts
              </MDTypography>
              <MDTypography variant="body2" color="text">
                Includes almonds, walnuts, cashews, and more.
              </MDTypography>
            </MDBox>
          </Grid>

          {/* Dairy Option */}
          <Grid item xs={12} sm={3}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedAllergen === 'Dairy' ? "contained" : "outlined"}
                onClick={() => handleAllergenSelect('Dairy')}
                sx={selectedAllergen === 'Dairy' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedAllergen === 'Dairy' ? "white" : "inherit" }}>local_drink</Icon> {/* Example icon */}
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Dairy
              </MDTypography>
              <MDTypography variant="body2" color="text">
                Avoid milk, cheese, and other dairy products.
              </MDTypography>
            </MDBox>
          </Grid>

          {/* Gluten Option */}
          <Grid item xs={12} sm={3}>
            <MDBox textAlign="center">
              <MDButton
                color="error"
                variant={selectedAllergen === 'Gluten' ? "contained" : "outlined"}
                onClick={() => handleAllergenSelect('Gluten')}
                sx={selectedAllergen === 'Gluten' ? selectedButtonStyles : unselectedButtonStyles}
              >
                <Icon sx={{ color: selectedAllergen === 'Gluten' ? "white" : "inherit" }}>grain</Icon> {/* Example icon */}
              </MDButton>
              <MDTypography variant="h6" sx={{ mt: 1 }}>
                Gluten
              </MDTypography>
              <MDTypography variant="body2" color="text">
                Avoid wheat and gluten-containing products.
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

Allergens.propTypes = {
  handleDataChange: PropTypes.func.isRequired,
};

export default Allergens;

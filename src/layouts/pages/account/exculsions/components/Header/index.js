/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/



// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";


// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";


function Header() {

  return (
    <Card id="profile">
      <MDBox p={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h3" fontWeight="medium">
                Food Exculsions and Preferences
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// Overview page components
import Header from "layouts/pages/profile/components/Header";

function Overview() {
  const [gender, setGender] = useState('male');
  const [bodyFat, setBodyFat] = useState('Medium');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [userData, setUserData] = useState({});
  const [err, setError] = useState('');

  // Function to fetch user data from API
  const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/meal/getPreferences', {
          params: { email: localStorage.getItem('email') },
          headers: {
            'jwt-token': `${localStorage.getItem('jwtToken')}`
          }
        });
        setUserData(response.data.data)
        setGender(response.data.data.gender)
        setBodyFat(response.data.data.bodyFatLevel)
        setHeight(response.data.data.height)
        setWeight(response.data.data.weight)
        setAge(response.data.data.age)
      } catch (error) {
        console.error('Error fetching meal suggestions:', error);
        setError('Failed to fetch meal suggestions');
      } 
    };

  // Function to update user profile

  // Fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  const buttonTextColor = (active) => (active ? 'white' : 'black');

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox 
        mb={2} 
        sx={{
          backgroundColor: '#f5f5f5', // Light background color
          minHeight: '100vh', // Ensure the background color covers the full page height
          padding: '16px', // Add some padding for spacing
        }}
      >
        <Header>
          <MDBox mt={5} mb={3} sx={{ color: 'black' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} lg={4}>
                <ProfileInfoCard
                  title="Personal Information"
                  info={{
                    fullName: userData.name,
                    mobile: userData.phoneNumber ,
                    email: userData.email,
                    location: "India",
                  }}
                  social={[
                    {
                      link: "",
                      icon: <FacebookIcon />,
                      color: "facebook",
                    },
                    {
                      link: "",
                      icon: <TwitterIcon />,
                      color: "twitter",
                    },
                    {
                      link: "",
                      icon: <InstagramIcon />,
                      color: "instagram",
                    },
                  ]}
                  action={{ route: "", tooltip: "Edit Profile" }}
                  shadow={false}
                  image="https://via.placeholder.com/150" // Add image
                />
                <Divider orientation="vertical" sx={{ mx: 2, height: 'auto' }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: 2 }}>
                  <MDTypography variant="subtitle1" fontWeight="medium">
                    Gender
                  </MDTypography>
                  <ButtonGroup variant="outlined" color="primary" sx={{ mb: 3 }}>
                    <Button
                      startIcon={<MaleIcon />}
                      variant={gender === 'Male' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'Male' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(gender === 'Male'),
                        borderColor: gender === 'Male' ? 'orange' : 'grey',
                        boxShadow: gender === 'Male' ? 'orange' : 'none',
                      }}
                      onClick={() => setGender('male')}
                    >
                      Male
                    </Button>
                    <Button
                      startIcon={<FemaleIcon />}
                      variant={gender === 'Female' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'Female' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(gender === 'Female'),
                        borderColor: gender === 'Female' ? 'orange' : 'grey',
                        boxShadow: gender === 'Female' ? 'orange' : 'none',
                      }}
                      onClick={() => setGender('Female')}
                    >
                      Female
                    </Button>
                    <Button
                      startIcon={<TransgenderIcon />}
                      variant={gender === 'non-binary' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'non-binary' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(gender === 'non-binary'),
                        borderColor: gender === 'non-binary' ? 'orange' : 'grey',
                        boxShadow: gender === 'non-binary' ? 'orange' : 'none',
                      }}
                      onClick={() => setGender('non-binary')}
                    >
                      Non-Binary
                    </Button>
                  </ButtonGroup>
                  <TextField 
                    label="Height (cm)" 
                    variant="outlined" 
                    sx={{ mb: 2, width: '100%' }} 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                  />
                  <TextField 
                    label="Weight (kg)" 
                    variant="outlined" 
                    sx={{ mb: 2, width: '100%' }} 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                  />
                  <TextField 
                    label="Age" 
                    variant="outlined" 
                    sx={{ mb: 2, width: '100%' }} 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                  />
                  <MDTypography variant="subtitle1" fontWeight="medium">
                    Body Fat Level
                  </MDTypography>
                  <ButtonGroup variant="outlined" color="primary">
                    <Button
                      variant={bodyFat === 'Low' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'Low' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'Low'),
                        borderColor: bodyFat === 'Low' ? 'orange' : 'grey',
                        boxShadow: bodyFat === 'Low' ? 'orange' : 'none',
                      }}
                      onClick={() => setBodyFat('Low')}
                    >
                      Low
                    </Button>
                    <Button
                      variant={bodyFat === 'Medium' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'Medium' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'Medium'),
                        borderColor: bodyFat === 'Medium' ? 'orange' : 'grey',
                        boxShadow: bodyFat === 'Medium' ? 'orange' : 'none',
                      }}
                      onClick={() => setBodyFat('Medium')}
                    >
                      Medium
                    </Button>
                    <Button
                      variant={bodyFat === 'High' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'High' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'High'),
                        borderColor: bodyFat === 'High' ? 'orange' : 'grey',
                        boxShadow: bodyFat === 'High' ? 'orange' : 'none',
                      }}
                      onClick={() => setBodyFat('High')}
                    >
                      High
                    </Button>
                  </ButtonGroup>
                  {err && (
                    <MDTypography variant="caption" color="error">
                      {err}
                    </MDTypography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </MDBox>
        </Header>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;

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
  const [bodyFat, setBodyFat] = useState('medium');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [userData, setUserData] = useState({});
  const [err, setError] = useState('');

  // Function to fetch user data from API
  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://api.yourdomain.com/user/profile'); // Replace with your API endpoint
      setUserData(response.data);
      setGender(response.data.gender || 'male');
      setBodyFat(response.data.bodyFat || 'medium');
      setWeight(response.data.weight || '');
      setHeight(response.data.height || '');
      setAge(response.data.age || '');
    } catch (error) {
      console.error('Error fetching user data:', err);
      setError('Failed to fetch user data');
    }
  };

  // Function to update user profile
  const updateUserProfile = async () => {
    try {
      await axios.put('https://api.yourdomain.com/user/profile', {
        gender,
        bodyFat,
        weight,
        height,
        age,
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating user profile:', err);
      setError('Failed to update profile');
    }
  };

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
                    fullName: userData.fullName || "Sathyagnana",
                    mobile: userData.mobile || "8105063177",
                    email: userData.email || "sathya@mail.com",
                    location: userData.location || "India",
                  }}
                  social={[
                    {
                      link: "https://www.facebook.com/CreativeTim/",
                      icon: <FacebookIcon />,
                      color: "facebook",
                    },
                    {
                      link: "https://twitter.com/creativetim",
                      icon: <TwitterIcon />,
                      color: "twitter",
                    },
                    {
                      link: "https://www.instagram.com/creativetimofficial/",
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
                      variant={gender === 'male' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'male' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(gender === 'male'),
                        borderColor: gender === 'male' ? 'orange' : 'grey',
                        boxShadow: gender === 'male' ? 'orange' : 'none',
                      }}
                      onClick={() => setGender('male')}
                    >
                      Male
                    </Button>
                    <Button
                      startIcon={<FemaleIcon />}
                      variant={gender === 'female' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'female' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(gender === 'female'),
                        borderColor: gender === 'female' ? 'orange' : 'grey',
                        boxShadow: gender === 'female' ? 'orange' : 'none',
                      }}
                      onClick={() => setGender('female')}
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
                      variant={bodyFat === 'low' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'low' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'low'),
                        borderColor: bodyFat === 'low' ? 'orange' : 'grey',
                        boxShadow: bodyFat === 'low' ? 'orange' : 'none',
                      }}
                      onClick={() => setBodyFat('low')}
                    >
                      Low
                    </Button>
                    <Button
                      variant={bodyFat === 'medium' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'medium' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'medium'),
                        borderColor: bodyFat === 'medium' ? 'orange' : 'grey',
                        boxShadow: bodyFat === 'medium' ? 'orange' : 'none',
                      }}
                      onClick={() => setBodyFat('medium')}
                    >
                      Medium
                    </Button>
                    <Button
                      variant={bodyFat === 'high' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'high' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'high'),
                        borderColor: bodyFat === 'high' ? 'orange' : 'grey',
                        boxShadow: bodyFat === 'high' ? 'orange' : 'none',
                      }}
                      onClick={() => setBodyFat('high')}
                    >
                      High
                    </Button>
                  </ButtonGroup>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={updateUserProfile}
                    sx={{ mt: 2 }}
                  >
                    Update Profile
                  </Button>
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

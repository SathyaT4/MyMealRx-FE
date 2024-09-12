import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

// Image imports
import maleImg from 'assets/images/icons8-male-50.png';
import femaleImg from 'assets/images/icons8-female-100.png';
import nonBinaryImg from 'assets/images/icons8-non-binary-64.png';
import lowFatImg from 'assets/images/icons8-pixel-man-90.png';
import mediumFatImg from 'assets/images/icons8-standing-man-100.png';
import highFatImg from 'assets/images/icons8-fat-cop-96.png';

function Overview() {
  const [gender, setGender] = useState('male');
  const [bodyFat, setBodyFat] = useState('Medium');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [userData, setUserData] = useState({});
  const [err, setError] = useState('');
  console.log(err);

  // Function to fetch user data from API
  const fetchUserData = async () => {
    try {
      const response = await axios.get('10.1.0.105:7000/meal/getPreferences', {
        params: { email: localStorage.getItem('email') },
        headers: {
          'jwt-token': `${localStorage.getItem('jwtToken')}`
        }
      });
      setUserData(response.data.data);
      setGender(response.data.data.gender);
      setBodyFat(response.data.data.bodyFatLevel);
      setHeight(response.data.data.height);
      setWeight(response.data.data.weight);
      setAge(response.data.data.age);
    } catch (error) {
      console.error('Error fetching meal suggestions:', error);
      setError('Failed to fetch meal suggestions');
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
          background: 'linear-gradient(to bottom right, #FFE5B4, #FFA500)', // Light orange gradient
          minHeight: '100vh', 
          padding: '16px',
          borderRadius: '15px' // Smoother edges for a clean look
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
                    mobile: userData.phoneNumber,
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
                  image="https://via.placeholder.com/150"
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
                      startIcon={<img src={maleImg} alt="Male" style={{ width: 20, height: 20, marginRight: 8 }} />}
                      variant={gender === 'Male' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'Male' ? '#FF8C00' : 'lightgrey',
                        color: buttonTextColor(gender === 'Male'),
                        borderColor: gender === 'Male' ? '#FF8C00' : 'grey',
                        boxShadow: gender === 'Male' ? '0px 4px 10px rgba(255, 140, 0, 0.5)' : 'none',
                        transition: 'all 0.3s ease', // Smooth transition for hover effects
                      }}
                      onClick={() => setGender('male')}
                      disabled
                    >
                      Male
                    </Button>
                    <Button
                      startIcon={<img src={femaleImg} alt="Female" style={{ width: 20, height: 20, marginRight: 8 }} />}
                      variant={gender === 'Female' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'Female' ? '#FF8C00' : 'lightgrey',
                        color: buttonTextColor(gender === 'Female'),
                        borderColor: gender === 'Female' ? '#FF8C00' : 'grey',
                        boxShadow: gender === 'Female' ? '0px 4px 10px rgba(255, 140, 0, 0.5)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => setGender('Female')}
                      disabled
                    >
                      Female
                    </Button>
                    <Button
                      startIcon={<img src={nonBinaryImg} alt="Non-Binary" style={{ width: 20, height: 20, marginRight: 8 }} />}
                      variant={gender === 'non-binary' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: gender === 'non-binary' ? '#FF8C00' : 'lightgrey',
                        color: buttonTextColor(gender === 'non-binary'),
                        borderColor: gender === 'non-binary' ? '#FF8C00' : 'grey',
                        boxShadow: gender === 'non-binary' ? '0px 4px 10px rgba(255, 140, 0, 0.5)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => setGender('non-binary')}
                      disabled
                    >
                      Non-Binary
                    </Button>
                  </ButtonGroup>
                  <TextField 
                    label="Height (cm)" 
                    variant="outlined" 
                    sx={{ mb: 2, width: '100%' }} 
                    value={height} 
                    inputProps={{ readOnly: true }}
                    onChange={(e) => setHeight(e.target.value)} 
                  />
                  <TextField 
                    label="Weight (kg)" 
                    variant="outlined" 
                    sx={{ mb: 2, width: '100%' }} 
                    value={weight} 
                    inputProps={{ readOnly: true }}
                    onChange={(e) => setWeight(e.target.value)} 
                  />
                  <TextField 
                    label="Age" 
                    variant="outlined" 
                    sx={{ mb: 2, width: '100%' }} 
                    value={age} 
                    inputProps={{ readOnly: true }}
                    onChange={(e) => setAge(e.target.value)} 
                  />
                  <MDTypography variant="subtitle1" fontWeight="medium">
                    Body Fat Level
                  </MDTypography>
                  <ButtonGroup variant="outlined" color="primary">
                    <Button
                      startIcon={<img src={lowFatImg} alt="Low Fat" style={{ width: 20, height: 20, marginRight: 8 }} />}
                      variant={bodyFat === 'Low' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'Low' ? '#FF8C00' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'Low'),
                        borderColor: bodyFat === 'Low' ? '#FF8C00' : 'grey',
                        boxShadow: bodyFat === 'Low' ? '0px 4px 10px rgba(255, 140, 0, 0.5)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => setBodyFat('Low')}
                      disabled
                    >
                      Low
                    </Button>
                    <Button
                      startIcon={<img src={mediumFatImg} alt="Medium Fat" style={{ width: 20, height: 20, marginRight: 8 }} />}
                      variant={bodyFat === 'Medium' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'Medium' ? '#FF8C00' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'Medium'),
                        borderColor: bodyFat === 'Medium' ? '#FF8C00' : 'grey',
                        boxShadow: bodyFat === 'Medium' ? '0px 4px 10px rgba(255, 140, 0, 0.5)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => setBodyFat('Medium')}
                      disabled
                    >
                      Medium
                    </Button>
                    <Button
                      startIcon={<img src={highFatImg} alt="High Fat" style={{ width: 20, height: 20, marginRight: 8 }} />}
                      variant={bodyFat === 'High' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: bodyFat === 'High' ? '#FF8C00' : 'lightgrey',
                        color: buttonTextColor(bodyFat === 'High'),
                        borderColor: bodyFat === 'High' ? '#FF8C00' : 'grey',
                        boxShadow: bodyFat === 'High' ? '0px 4px 10px rgba(255, 140, 0, 0.5)' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => setBodyFat('High')}
                      disabled
                    >
                      High
                    </Button>
                  </ButtonGroup>
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

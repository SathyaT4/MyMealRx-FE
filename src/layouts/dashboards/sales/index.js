import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GenerateIcon from '@mui/icons-material/PlayArrow'; // Import an icon for the Generate button
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from 'layouts/pages/profile/components/Header';

function Sales() {
  const navigate = useNavigate();
  const [mealType, setMealType] = useState('');
  const [err, setError] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [numMeals, setNumMeals] = useState('');
  const [numUsers, setNumUsers] = useState('');
  const [numDays , setNumDays] = useState('')
  console.log(err);

  const fetchMealSuggestions = async () => {
    try {
      const response = await axios.get('http://10.1.0.105:7000/meal/getPreferences', {
        params: { email: localStorage.getItem('email') },
        headers: {
          'jwt-token': `${localStorage.getItem('jwtToken')}`
        }
      });
      setPreferences(response.data.data.preferences);
      setMealType(response.data.data.mealType);
    } catch (error) {
      console.error('Error fetching meal suggestions:', error);
      setError('Failed to fetch meal suggestions');
    }
  };

  const handleGenerate = () => {
  navigate('/applications/recipes', {
    state: {
      numDays
    }
  });
};
  useEffect(() => {
    fetchMealSuggestions();
  }, [mealType]);

  const buttonTextColor = (active) => (active ? 'white' : 'black');

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox 
        mb={2} 
        sx={{
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          padding: '16px',
        }}
      >
        <Header>
          <MDBox mt={5} mb={3} sx={{ color: 'black' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, px: 2 }}>
                  <MDTypography variant="subtitle1" fontWeight="medium">
                    Preferences (Exclusions)
                  </MDTypography>
                  <ButtonGroup variant="outlined" color="primary">
                    {preferences.map((preference) => (
                      <Button
                        key={preference}
                        sx={{
                          backgroundColor: 'orange',
                          color: 'black',
                          '&:hover': {
                            backgroundColor: 'darkorange',
                            color: 'white',
                          },
                          borderRadius: '8px',
                          padding: '8px 16px',
                        }}
                      >
                        {preference}
                      </Button>
                    ))}
                  </ButtonGroup>
                  <MDTypography variant="subtitle1" fontWeight="medium" sx={{ mt: 2 }}>
                    Meal Type
                  </MDTypography>
                  <ButtonGroup variant="outlined" color="primary" sx={{ mb: 3 }}>
                    <Button
                      startIcon={<RestaurantMenuIcon />}
                      variant={mealType === 'Veg' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: mealType === 'Veg' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(mealType === 'Veg'),
                        borderColor: mealType === 'Veg' ? 'orange' : 'grey',
                        boxShadow: mealType === 'Veg' ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
                        borderRadius: '8px',
                        padding: '8px 16px',
                      }}
                      onClick={() => setMealType('Veg')}
                    >
                      Vegetarian
                    </Button>
                    <Button
                      startIcon={<RestaurantIcon />}
                      variant={mealType === 'Nonveg' ? 'outlined' : 'contained'}
                      sx={{
                        backgroundColor: mealType === 'Nonveg' ? 'orange' : 'lightgrey',
                        color: buttonTextColor(mealType === 'Nonveg'),
                        borderColor: mealType === 'Nonveg' ? 'orange' : 'grey',
                        boxShadow: mealType === 'Nonveg' ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
                        borderRadius: '8px',
                        padding: '8px 16px',
                      }}
                      onClick={() => setMealType('Nonveg')}
                    >
                      Non Vegetarian
                    </Button>
                  </ButtonGroup>
                  <MDTypography variant="subtitle1" fontWeight="medium" sx={{ mt: 2 }}>
                    Number of Meals per Day
                  </MDTypography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <TextField
                      type="number"
                      value={numMeals}
                      onChange={(e) => setNumMeals(e.target.value)}
                      inputProps={{ min: 0 }}
                      sx={{
                        '& .MuiInputBase-input': {
                          padding: '12px',
                        },
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                  </Box>
                  <MDTypography variant="subtitle1" fontWeight="medium" sx={{ mt: 2 }}>
                    Number of Days
                  </MDTypography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <TextField
                      type="number"
                      value={numDays}
                      onChange={(e) => setNumDays(e.target.value)}
                      inputProps={{ min: 0 }}
                      sx={{
                        '& .MuiInputBase-input': {
                          padding: '12px',
                        },
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                  </Box>
                  <MDTypography variant="subtitle1" fontWeight="medium" sx={{ mt: 2 }}>
                    Number of Users
                  </MDTypography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <TextField
                      type="number"
                      value={numUsers}
                      onChange={(e) => setNumUsers(e.target.value)}
                      inputProps={{ min: 0 }}
                      sx={{
                        '& .MuiInputBase-input': {
                          padding: '12px',
                        },
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                  </Box>
                  <Button
                      variant="contained"
                      color="primary"
                      startIcon={<GenerateIcon />}
                      sx={{
                        backgroundColor: 'orange',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'darkorange',
                        },
                        borderRadius: '8px',
                        padding: '8px 16px',
                      }}
                      onClick={handleGenerate}
                    >
                      Generate
                    </Button>
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

export default Sales;

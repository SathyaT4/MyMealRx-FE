import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MealPlan from 'layouts/applications/recipes'; // Update import path if necessary
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from 'layouts/pages/profile/components/Header';
import GenerateIcon from '@mui/icons-material/PlayArrow';
import veg from "assets/images/vegetarian.png";
import vegan from "assets/images/vegan.png";
import paleo from "assets/images/paleo.png";
import eggs from 'assets/images/icons8-eggs-100.png';
import milk from "assets/images/icons8-milk-80.png";
import wheat from "assets/images/icons8-wheat-100.png";
import treenuts from "assets/images/treenuts.png";
import peanuts from "assets/images/peanuts.png";
import soy from "assets/images/icons8-soy-64.png";
import fish from "assets/images/icons8-fish-100.png";
import shellfish from "assets/images/icons8-shellfish-100.png";
import asian from "assets/images/asia.png";
import american from "assets/images/america.png";
import african from "assets/images/africa.png";
import diabetics from "assets/images/sugarfree.png";

function Sales() {
  const [mealType, setMealType] = useState('');
  console.log(mealType)
  const [preferences, setPreferences] = useState(['Vegetarian', 'Vegan', 'Paleo', 'Diabetics']);
  const [numDays, setNumDays] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [culturalBackground, setCulturalBackground] = useState('American');
  const [dietPreferences, setDietPreferences] = useState([]);
  const [allergens, setAllergens] = useState([]);
  const [gender, setGender] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [priceSensitivity, setPriceSensitivity] = useState('Medium'); // Default to Medium
  const [meal, showMeal] = useState(false);

  const handleTryAgain = () => {
    showMeal(false); // Hide the meal plan and bring back the form
    setErrorMessage('');
  };

  const loadDummyData = () => {
    setPreferences(['Vegetarian', 'Vegan', 'Paleo', 'Diabetics']);
    setMealType('Vegetarian');
    setDietPreferences(['Vegan', 'Paleo']);
    setAllergens(['Nuts', 'Dairy']);
    setPrepTime('30 mins');
    setPriceSensitivity('Medium');
    setGender('Female');
    setCulturalBackground('American');
    setAllergens(['Dairy']);
    setNumDays(3);
  };

  const handleGenerate = () => {
    if (!numDays || numDays < 1 || numDays > 7) {
      setErrorMessage('Number of days is required and must be between 1 and 7');
      return;
    }
    showMeal(true);
  };

  const togglePreference = (item) => {
    setDietPreferences((prev) => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const toggleAllergen = (item) => {
    setAllergens((prev) => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const fetchExclusions = async () => {
    try {
      const response = await axios.get('10.1.0.105:7000/meal/getPreferences', {
        params: { email: localStorage.getItem('email') },
        headers: { 'jwt-token': `${localStorage.getItem('jwtToken')}` }
      });
      setAllergens(response.data.data.preferences);
      setPrepTime('30 mins');
      setPriceSensitivity('Medium');
      setNumDays(3)
      const hasDairyOrEggs = response.data.data.preferences.includes('Dairy') || response.data.data.preferences.includes('Eggs');
      const hasMeatOrFish = response.data.data.preferences.includes('Meat') && response.data.data.preferences.includes('Fish');
      if (hasMeatOrFish) {
        setDietPreferences(['Vegetarian']);
      } else {
        setDietPreferences(['Paleo']);
      }
      if (hasDairyOrEggs) {
        setDietPreferences(['Vegan']);
      } 
    } catch (error) {
      console.error('Error fetching meal suggestions:', error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("authenticated") === 'true') {
      fetchExclusions();
    } else {
      loadDummyData();
    }
  }, []);

  const buttonTextColor = (active) => (active ? 'white' : 'black');

  const preferenceImages = {
    Vegetarian: veg,
    Vegan: vegan,
    Paleo: paleo,
    Diabetics: diabetics
  };

  const allergenImages = {
    Peanuts: peanuts,
    'Tree Nuts': treenuts,
    Dairy: milk,
    Eggs: eggs,
    Soy: soy,
    Wheat: wheat,
    Fish: fish,
    Shellfish: shellfish
  };

  const culturalBackgroundImages = {
    Asian: asian,
    American: american,
    African: african
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header />
      <MDBox 
        mb={2} 
        sx={{
          background: "linear-gradient(to right, #FFD194, #FF9A8B)",
          minHeight: '100vh',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MDBox 
          mt={5} 
          mb={3} 
          sx={{ 
            color: 'black', 
            width: '100%', 
            maxWidth: 1200 
          }}
        >
          <MDTypography 
            variant="h4" 
            fontWeight="bold" 
            align="center" 
            sx={{ mb: 4 }}
          >
            Discover Your Perfect Meal Plan!
            <br />
            Tailored to Your Preferences and Needs
          </MDTypography>
         
          {!meal ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, px: 2 }}>
                {errorMessage && (
                  <MDAlert severity="error" sx={{ mb: 2 }}>
                    {errorMessage}
                  </MDAlert>
                )}

                <MDTypography variant="subtitle1" fontWeight="medium">
                  {localStorage.getItem("authenticated") === 'true' ? "Your Cultural Background" : "Cultural Background"}
                </MDTypography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                  {Object.keys(culturalBackgroundImages).map((background) => (
                    <Button
                      key={background}
                      onClick={() => setCulturalBackground(background)}
                      disabled={localStorage.getItem("authenticated") === 'true'}
                      sx={{
                        backgroundColor: culturalBackground === background ? 'orange' : 'lightgrey',
                        color: culturalBackground === background ? 'white' : 'black',
                        '&:hover': {
                          backgroundColor: culturalBackground === background ? 'darkorange' : 'grey',
                        },
                        borderRadius: '8px',
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <img 
                        src={culturalBackgroundImages[background]} 
                        alt={background} 
                        style={{ width: 24, height: 24 }} 
                      />
                      {background}
                    </Button>
                  ))}
                </Box>

                {localStorage.getItem("authenticated") === 'false'  && (
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <MDTypography variant="subtitle1" fontWeight="medium">
                      Gender
                    </MDTypography>
                    <ButtonGroup variant="outlined" color="primary">
                      <Button
                        variant={gender === 'Male' ? 'outlined' : 'outlined'}
                        onClick={() => setGender('Male')}
                        sx={{
                          backgroundColor: gender === 'Male' ? 'orange' : 'lightgrey',
                          color: buttonTextColor(gender === 'Male'),
                          borderColor: gender === 'Male' ? 'orange' : 'grey',
                          borderRadius: '8px',
                          padding: '8px 16px',
                        }}
                      >
                        Male
                      </Button>
                      <Button
                        variant={gender === 'Female' ? 'outlined' : 'outlined'}
                        onClick={() => setGender('Female')}
                        sx={{
                          backgroundColor: gender === 'Female' ? 'orange' : 'lightgrey',
                          color: buttonTextColor(gender === 'Female'),
                          borderColor: gender === 'Female' ? 'orange' : 'grey',
                          borderRadius: '8px',
                          padding: '8px 16px',
                        }}
                      >
                        Female
                      </Button>
                      <Button
                        variant={gender === 'Non-Binary' ? 'outlined' : 'outlined'}
                        onClick={() => setGender('Non-Binary')}
                        sx={{
                          backgroundColor: gender === 'Non-Binary' ? 'orange' : 'lightgrey',
                          color: buttonTextColor(gender === 'Non-Binary'),
                          borderColor: gender === 'Non-Binary' ? 'orange' : 'grey',
                          borderRadius: '8px',
                          padding: '8px 16px',
                        }}
                      >
                        Non-Binary
                      </Button>
                    </ButtonGroup>
                  </Box>
                )}

                <MDTypography variant="subtitle1" fontWeight="medium">
                  {localStorage.getItem("authenticated") === 'true' ? "Your Diet Preferences" : "Diet Preferences"}
                </MDTypography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                  {preferences.map((preference) => (
                    <Button
                      key={preference}
                      onClick={() => togglePreference(preference)}
                      disabled={localStorage.getItem("authenticated") === 'true'}
                      sx={{
                        backgroundColor: dietPreferences.includes(preference) ? 'orange' : 'lightgrey',
                        color: dietPreferences.includes(preference) ? 'white' : 'black',
                        '&:hover': {
                          backgroundColor: dietPreferences.includes(preference) ? 'darkorange' : 'grey',
                        },
                        borderRadius: '8px',
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <img 
                        src={preferenceImages[preference]} 
                        alt={preference} 
                        style={{ width: 24, height: 24 }} 
                      />
                      {preference}
                    </Button>
                  ))}
                </Box>

                <MDTypography variant="subtitle1" fontWeight="medium">
                  {localStorage.getItem("authenticated") === 'true' ? "Your Allergens" : "Allergens"}
                </MDTypography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {Object.keys(allergenImages).map((allergen) => (
                    <Button
                      key={allergen}
                      onClick={() => toggleAllergen(allergen)}
                      sx={{
                        backgroundColor: allergens.includes(allergen) ? 'orange' : 'lightgrey',
                        color: allergens.includes(allergen) ? 'white' : 'black',
                        '&:hover': {
                          backgroundColor: allergens.includes(allergen) ? 'darkorange' : 'grey',
                        },
                        borderRadius: '8px',
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <img 
                        src={allergenImages[allergen]} 
                        alt={allergen} 
                        style={{ width: 24, height: 24 }} 
                      />
                      {allergen}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <MDTypography variant="subtitle1" fontWeight="medium">
                  Number of Days
                </MDTypography>
                <TextField
                  variant="outlined"
                  type="number"
                  value={numDays}
                  onChange={(e) => setNumDays(Math.min(7, Number(e.target.value)))}
                  placeholder="Enter number of days (Max: 7)"
                  inputProps={{
                    min: 1,
                    max: 7
                  }}
                />

                <MDTypography variant="subtitle1" fontWeight="medium">
                  Prep Time
                </MDTypography>
                <TextField
                  variant="outlined"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                  placeholder="Enter preparation time"
                />

                <MDTypography variant="subtitle1" fontWeight="medium">
                  Price Sensitivity
                </MDTypography>
                <Select
                  variant="outlined"
                  value={priceSensitivity}
                  onChange={(e) => setPriceSensitivity(e.target.value)}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>

                <Box mt={4}>
                  <Button
                    onClick={handleGenerate}
                    variant="contained"
                    color="primary"
                    sx={{
                      width: '100%',
                      backgroundColor: 'orange',
                      '&:hover': {
                        backgroundColor: 'darkorange',
                      },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '12px 0'
                    }}
                  >
                    <GenerateIcon sx={{ mr: 1 }} />
                    Generate Meal Plan
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ) : (
            <Grid container spacing={4}>
               <Grid item xs={12}>
                <Button
                  fullWidth
                  onClick={handleTryAgain}
                  sx={{
                    backgroundColor: 'skyblue',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'lightblue',
                    },
                    borderRadius: '8px',
                    padding: '16px',
                  }}
                >
                  Generate again with new Preferences
                </Button>
              </Grid>
              <Grid item xs={12}>
                {/* Pass numDays as a prop */}
                <MealPlan numDays={numDays} />
              </Grid>
            </Grid>
        )}
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Sales;

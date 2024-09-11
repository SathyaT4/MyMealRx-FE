import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MDAlert from 'components/MDAlert';

// MyExclusions page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import Header from 'layouts/pages/profile/components/Header';

// Image imports
import veg from "assets/images/vegetarian.png";
import vegan from "assets/images/vegan.png";
import paleo from "assets/images/paleo.png";
import eggs from 'assets/images/icons8-eggs-100.png';
import Dairy from "assets/images/icons8-milk-80.png";
import wheat from "assets/images/icons8-wheat-100.png";
import treenuts from "assets/images/treenuts.png";
import peanuts from "assets/images/peanuts.png";
import soy from "assets/images/icons8-soy-64.png";
import fish from "assets/images/icons8-fish-100.png";
import shellfish from "assets/images/icons8-shellfish-100.png";
import diabetics from "assets/images/sugarfree.png";

function MyExclusions() {
  const [selectedDiet, setSelectedDiet] = useState('');
  const [selectedDietType, setSelectedDietType] = useState([]);
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const [dietPreferences, setDietPreferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [cuisinePreferences, setCuisinePreferences] = useState([]);

  const fetchExclusions = async () => {
    try {
      const response = await axios.get('http://localhost:7000/meal/getPreferences', {
        params: { email: localStorage.getItem('email') },
        headers: { 'jwt-token': `${localStorage.getItem('jwtToken')}` }
      });
      setSelectedDiet(response.data.data.mealType);
      setSelectedAllergens(response.data.data.preferences);
      setDietPreferences(response.data.data.preferences);
      setCuisinePreferences(response.data.data.cuisinePreferences || []);

      const hasDairyOrEggs = response.data.data.preferences.includes('Dairy') || response.data.data.preferences.includes('Eggs');
      const hasMeatOrFish = response.data.data.preferences.includes('Meat') && response.data.data.preferences.includes('Fish');
      console.log(dietPreferences)
      if (hasMeatOrFish === true) {
        setSelectedDietType(['Vegetarian']);
      } if (hasMeatOrFish === false) {
        setSelectedDietType(['Paleo']);
      }
      if (hasDairyOrEggs === true || hasDairyOrEggs === true) {
        setSelectedDietType(['Vegan']);
      } 
    } catch (error) {
      console.error('Error fetching meal suggestions:', error);
      setApiError('Failed to fetch meal suggestions');
    } finally {
      setLoading(false);
    }
  };

  const updateExclusions = async () => {
    try {
      await axios.post('http://localhost:7000/meal/addPreferences', {
        email: localStorage.getItem('email'),
        mealType: selectedDiet,
        preferences: selectedAllergens,
        cuisinePreferences,
      }, {
        headers: { 'jwt-token': `${localStorage.getItem('jwtToken')}` }
      });
      setApiError('Exclusions updated successfully');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      fetchExclusions();
    } catch (error) {
      console.error('Error updating exclusions:', error);
      setApiError('Failed to update exclusions');
    }
  };

  useEffect(() => {
    fetchExclusions();
  }, []);

  const handleAllergenToggle = (allergen) => {
    setSelectedAllergens(prev =>
      prev.includes(allergen) ? prev.filter(a => a !== allergen) : [...prev, allergen]
    );
  };

  const handleDietToggle = (diet) => {
    setSelectedDietType(prev =>
      prev.includes(diet) ? prev.filter(a => a !== diet) : [...prev, diet]
    );
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <BaseLayout>
      <Header title="My Exclusions" subtitle="Manage your diet preferences and allergen exclusions here." />

      <Box mt={4} mb={3} px={2}>
        {showAlert && (
          <Box
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="tooltip"
            sx={{ width: '80%', maxWidth: '400px' }}
          >
            <MDAlert color="success" dismissible>
              {apiError}
            </MDAlert>
          </Box>
        )}

        {/* Diet Preferences Section */}
        <Box
          mb={3}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius="borderRadius"
          sx={{ background: 'linear-gradient(135deg, #FFF9E6, #FFCC80)' }}
        >
          <Typography variant="h6" fontWeight="bold">
            My Exclusions
          </Typography>
          <Typography variant="body1" mt={2}>
            List of preset exclusions made by the user.
          </Typography>
          <Box mt={2}>
            {dietPreferences.map((preference) => (
              <Button
                key={preference}
                variant="contained"
                sx={{
                  color: 'white',
                  backgroundColor: '#FF8C00',
                  marginRight: '8px',
                  marginBottom: '8px',
                  '&:hover': {
                    backgroundColor: 'darkorange',
                  },
                }}
                startIcon={<CheckCircleIcon />}
              >
                {preference}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Cuisine Preferences Section */}
        <Box
          mb={3}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius="borderRadius"
          sx={{ background: 'linear-gradient(135deg, #FFF9E6, #FFCC80)' }}
        >
          <Typography variant="h6" fontWeight="bold">
            Diet Preferences
          </Typography>
          <Typography variant="body1" mt={2}>
            Select your diet preferences.
          </Typography>
          <Grid container spacing={2} mt={1}>
            {[
              { label: 'Vegetarian', image: veg },
              { label: 'Vegan', image: vegan },
              { label: 'Paleo', image: paleo },
              { label: 'Diabetic Freindly', image: diabetics },
            ].map(({ label, image }) => (
              <Grid item key={label}>
                <Button
                  color='error'
                  variant={selectedDietType.includes(label) ? 'outlined' : 'contained'}
                  sx={{
                    color: selectedDietType.includes(label) ? 'white' : '#FF8C00',
                    backgroundColor: selectedDietType.includes(label) ? '#FF8C00' : 'white',
                    '&:hover': {
                      backgroundColor: selectedDietType.includes(label) ? '#FF8C00' : 'yellow',
                    },
                  }}
                  startIcon={<img src={image} alt={label} style={{ width: 20, height: 20, marginRight: 8 }} />}
                  onClick={() => handleDietToggle(label)}
                >
                  {label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Diet Type Section */}
        <Box
          mb={3}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius="borderRadius"
          sx={{ background: 'linear-gradient(135deg, #FFF9E6, #FFCC80)' }}
        >
          <Typography variant="h6" fontWeight="bold">
            Veg or Non-Veg
          </Typography>
          <Typography variant="body1" mt={2}>
            Choose between vegetarian or non-vegetarian options to customize your meal plans.
          </Typography>
          <ButtonGroup variant="contained" sx={{ mt: 2 }}>
            <Button
              variant={selectedDiet === 'Veg' ? 'outlined' : 'contained'}
              sx={{
                color: selectedDiet === 'Veg' ? 'white' : '#FF8C00',
                backgroundColor: selectedDiet === 'Veg' ? '#FF8C00' : 'inherit',
                '&:hover': {
                  backgroundColor: selectedDiet === 'Veg' ? '#FF8C00' : 'inherit',
                },
              }}
              onClick={() => setSelectedDiet('Veg')}
              startIcon={<img src={veg} alt="Vegetarian" style={{ width: 20, height: 20, marginRight: 8 }} />}
            >
              Veg
            </Button>
            <Button
              variant={selectedDiet === 'Nonveg' ? 'outlined' : 'contained'}
              sx={{
                color: selectedDiet === 'Nonveg' ? 'white' : '#FF8C00',
                backgroundColor: selectedDiet === 'Nonveg' ? '#FF8C00' : 'inherit',
                '&:hover': {
                  backgroundColor: selectedDiet === 'Nonveg' ? '#FF8C00' : 'inherit',
                },
              }}
              onClick={() => setSelectedDiet('Nonveg')}
              startIcon={<img src={paleo} alt="Non-Vegetarian" style={{ width: 20, height: 20, marginRight: 8 }} />}
            >
              Non-Veg
            </Button>
          </ButtonGroup>
        </Box>

        {/* Allergen Exclusions Section */}
        <Box
          mb={3}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius="borderRadius"
          sx={{ background: 'linear-gradient(135deg, #FFF9E6, #FFCC80)' }}
        >
          <Typography variant="h6" fontWeight="bold">
            Allergens
          </Typography>
          <Typography variant="body1" mt={2}>
            Select allergens to exclude from your diet.
          </Typography>
          <Grid container spacing={2} mt={1}>
            {[
              { label: 'Eggs', image: eggs },
              { label: 'Dairy', image: Dairy },
              { label: 'Wheat', image: wheat },
              { label: 'Tree Nuts', image: treenuts },
              { label: 'Peanuts', image: peanuts },
              { label: 'Soy', image: soy },
              { label: 'Fish', image: fish },
              { label: 'Shellfish', image: shellfish },
            ].map(({ label, image }) => (
              <Grid item key={label}>
                <Button
                  variant={selectedAllergens.includes(label) ? 'outlined' : 'contained'}
                  sx={{
                    color: selectedAllergens.includes(label) ? 'white' : '#FF8C00',
                    backgroundColor: selectedAllergens.includes(label) ? '#FF8C00' : 'white',
                    '&:hover': {
                      backgroundColor: selectedAllergens.includes(label) ? '#FF8C00' : '#FF8C00',
                    },
                  }}
                  startIcon={<img src={image} alt={label} style={{ width: 20, height: 20, marginRight: 8 }} />}
                  onClick={() => handleAllergenToggle(label)}
                >
                  {label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Save Button */}
        <Box mt={3} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={updateExclusions}
            sx={{
              backgroundColor: '#FF8C00',
              color: 'white',
              '&:hover': {
                backgroundColor: '#FF8C00',
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </BaseLayout>
  );
}

export default MyExclusions;

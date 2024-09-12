import React, { useState } from "react";
import { Button, TextField, Typography, Box, ToggleButton, ToggleButtonGroup, Grid, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import MealPlan from "layouts/applications/recipes";
import Header from "layouts/authentication/components/Header";
import healthyFoodImage from "assets/images/balanced-diet.jpg";
import balancedDietImage from "assets/images/food1.jpeg";
import veganIcon from "assets/images/vegan.png";
import vegetarianIcon from "assets/images/vegetarian.png";
import paleoIcon from "assets/images/paleo.png";
import diabeticIcon from "assets/images/sugarfree.png";
import anythingIcon from "assets/images/icons8-bagel-94.png";

// Custom styled components
const StyledButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to right, #FF7E5F, #FD3A69)",
  color: "#fff",
  fontWeight: "bold",
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 5px 15px rgba(255, 123, 123, 0.4)",
  '&:hover': {
    background: "linear-gradient(to right, #FF6A5F, #FD2A55)",
    boxShadow: theme.shadows[6],
  },
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
  textAlign: "center",
  padding: theme.spacing(4),
  background: "linear-gradient(to right, #FDCB82, #FEB47B)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  margin: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const DietButton = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: "#FFF",
  color: "#555",
  border: "2px solid #FF7E5F",
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
  '&.Mui-selected': {
    backgroundColor: "#FF7E5F",
    color: "#FFF",
  },
  '&:hover': {
    backgroundColor: "#FD3A69",
    color: "#FFF",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const ImageContainer = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  maxHeight: '300px',
  objectFit: 'cover',
  marginBottom: theme.spacing(4),
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    maxHeight: '200px',
  },
}));

const InputField = styled(TextField)(({ theme }) => ({
  maxWidth: "400px",
  marginBottom: theme.spacing(3),
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

function Landing() {
  localStorage.setItem("authenticated",false)
  const [diet, setDiet] = useState("Diabetic Friendly");
  const [days, setDays] = useState(3);
  const [meal, showMeal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Added error state

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDietChange = (event, newDiet) => {
    if (newDiet !== null) {
      setDiet(newDiet);
    }
  };

  const handleGenerateClick = () => {
    if (days < 3 || days > 7) {
      setErrorMessage('Please choose between 3 and 7 days.');
      return;
    }

    setErrorMessage('');
    // alert(`Generating meal plan for diet: ${diet}, Days: ${days}`);
    showMeal(true); // Show the meal plan once generated
  };

  const handleTryAgain = () => {
    showMeal(false); // Hide the meal plan and bring back the form
    setErrorMessage(''); // Reset error message
  };

  return (
    <div>
      <Header />
      <Container>
        {/* Header and Welcome Text */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#FD3A69", fontSize: { xs: "1.5rem", sm: "2rem" } }}>
          Take Control of Your Diet, Effortlessly
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: "#555", maxWidth: "600px", mb: 4, fontSize: { xs: "0.9rem", sm: "1.1rem" } }}>
          MyMealRX provides personalized meal plans that fit your unique preferences, schedule, and goals. Generate a balanced meal plan tailored to your needs in just seconds.
        </Typography>

        {/* Image Section */}
        <Grid container spacing={isSmallScreen ? 0 : 2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <ImageContainer src={balancedDietImage} alt="Balanced Diet" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageContainer src={healthyFoodImage} alt="Healthy Food" />
          </Grid>
        </Grid>

        {/* Prompt and Diet Selection */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#FF7E5F", mt: 4, fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
          Ready to Transform Your Diet? Select Your Preferences:
        </Typography>
        { !meal ? (
        <>
          <ToggleButtonGroup
            value={diet}
            exclusive
            onChange={handleDietChange}
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", mb: 3 }}
          >
            <DietButton value="Anything">
              <img src={anythingIcon} alt="Anything" style={{ width: 24, height: 24, marginRight: 8 }} />
              Anything
            </DietButton>
            <DietButton value="Diabetic Friendly">
              <img src={diabeticIcon} alt="Diabetic Friendly" style={{ width: 24, height: 24, marginRight: 8 }} />
              Diabetic Friendly
            </DietButton>
            <DietButton value="Vegan">
              <img src={veganIcon} alt="Vegan" style={{ width: 24, height: 24, marginRight: 8 }} />
              Vegan
            </DietButton>
            <DietButton value="Vegetarian">
              <img src={vegetarianIcon} alt="Vegetarian" style={{ width: 24, height: 24, marginRight: 8 }} />
              Vegetarian
            </DietButton>
            <DietButton value="Paleo">
              <img src={paleoIcon} alt="Paleo" style={{ width: 24, height: 24, marginRight: 8 }} />
              Paleo
            </DietButton>
          </ToggleButtonGroup>

          {/* Number of Days Input */}
          <InputField
            label="Number of Days (3 to 7)"
            type="number"
            value={days}
            onChange={(e) => setDays(Math.max(3, Math.min(7, e.target.value)))}
            variant="outlined"
            fullWidth
          />
          {errorMessage && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Typography>
          )}

          {/* Generate Button */}
          <StyledButton onClick={handleGenerateClick}>
            Generate Your Personalized Meal Plan
          </StyledButton>
        </>
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
                        Re-Generate again with new Preferences
                      </Button>
                    </Grid>
                    {/* MealPlan component */}
                    <Grid item xs={12}>
                    <MealPlan numDays={days} />
                    </Grid>
      
                    {/* Try Again Button */}
                   
                  </Grid>
              )}
      </Container>
    </div>
  );
}

export default Landing;

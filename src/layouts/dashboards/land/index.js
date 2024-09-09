import React, { useState } from "react";
import { Button, TextField, Typography, Box, ToggleButton, ToggleButtonGroup, Grid, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { RestaurantMenu, LocalDining, FitnessCenter, MedicalServices } from "@mui/icons-material";
import Header from "layouts/authentication/components/Header";
import healthyFoodImage from "assets/images/balanced-diet.jpg";
import balancedDietImage from "assets/images/food1.jpeg";

// Custom styled components
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFA500",
  color: "#fff",
  fontWeight: "bold",
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: "#FF5722",
  },
  marginTop: theme.spacing(2),
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
  backgroundColor: "#FFF8E1",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  margin: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const DietButton = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: "#FFF",
  color: "#555",
  border: "2px solid #FFA500",
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
  '&.Mui-selected': {
    backgroundColor: "#FFA500",
    color: "#FFF",
  },
  '&:hover': {
    backgroundColor: "#FF5722",
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
}));

const InputField = styled(TextField)(({ theme }) => ({
  maxWidth: "400px",
  marginBottom: theme.spacing(3),
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

function Landing() {
  const [diet, setDiet] = useState("Anything");
  const [days, setDays] = useState(3);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDietChange = (event, newDiet) => {
    if (newDiet !== null) {
      setDiet(newDiet);
    }
  };

  const handleGenerateClick = () => {
    alert(`Generating meal plan for diet: ${diet}, Days: ${days}`);
  };

  return (
    <div>
      <Header />
      <Container>
        {/* Header and Welcome Text */}
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#FF5722" }}>
          Take Control of Your Diet, Effortlessly
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: "#555", maxWidth: "600px", mb: 4 }}>
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
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#FF5722", mt: 4 }}>
          Ready to Transform Your Diet? Select Your Preferences:
        </Typography>
        <ToggleButtonGroup
          value={diet}
          exclusive
          onChange={handleDietChange}
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", mb: 3 }}
        >
          <DietButton value="Anything">
            <RestaurantMenu sx={{ mr: 1 }} /> Anything
          </DietButton>
          <DietButton value="Vegan">
            <RestaurantMenu sx={{ mr: 1 }} /> Vegan
          </DietButton>
          <DietButton value="Vegetarian">
            <LocalDining sx={{ mr: 1 }} /> Vegetarian
          </DietButton>
          <DietButton value="Paleo">
            <FitnessCenter sx={{ mr: 1 }} /> Paleo
          </DietButton>
          <DietButton value="Diabetic Friendly">
            <MedicalServices sx={{ mr: 1 }} /> Diabetic Friendly
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

        {/* Generate Button */}
        <StyledButton onClick={handleGenerateClick}>
          Generate Your Personalized Meal Plan
        </StyledButton>
      </Container>
    </div>
  );
}

export default Landing;

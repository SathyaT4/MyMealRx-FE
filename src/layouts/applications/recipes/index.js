import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import FoodLoader from "components/Loader/FoodLoader";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import DayCard from "./components/DayCard";
import MealDetail from "./components/MealDetail";


function formatDate(dayString) {
  const today = new Date();
  const match = dayString.match(/\d+/);
  const dayOffset = match ? parseInt(match[0], 10) : 1;
  today.setDate(today.getDate() + dayOffset);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(today);
}

function MealPlan({ numDays }) {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [open, setOpen] = useState(false);
  const [mealPlan, setMealPlan] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setOpen(true);
  };


  useEffect(() => {
    const fetchMealPlan = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://10.1.0.105:7000/recommendation/recipeRecommendation",
          {
            params: { days: numDays },
          }
        );
        const plan = response.data.meal_plan;
        console.log("Meal Plan:", plan);
        setMealPlan(plan);
        setError("");
      } catch (err) {
        setError("Failed to load meal plan.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMealPlan();
  }, [numDays]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <FoodLoader />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" align="center" color="error">
        {error}
      </Typography>
    );
  }

  return (
    <div style={{ padding: "16px", background: "linear-gradient(to right, #FDCB82, #FEB47B)" }}>
      <Grid container spacing={4} direction="column">
        {mealPlan.map((dayObj, index) => {
          // Assuming the day is the key of the object like "day 1", "day 2", etc.
          const day = Object.keys(dayObj)[0]; // "day 1", "day 2", etc.
          const meals = dayObj[day]; // Array of meals for this day

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                variant="outlined"
                sx={{
                  margin: "10px auto",
                  padding: "10px",
                  background: "linear-gradient(to right, #FDCB82, #FEB47B)",
                  borderRadius: "12px",
                  maxWidth: "100%", // Ensure the card doesn't overflow its container
                }}
              >
                <CardContent>
                  <Typography variant="h5" align="center" sx={{ mb: 2, color: "#fff" }}>
                    {formatDate(day)}
                  </Typography>

                  

                  <DayCard meals={meals} onMealClick={handleMealClick} />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {selectedMeal && (
        <MealDetail meal={selectedMeal} open={open} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

MealPlan.propTypes = {
  numDays: PropTypes.number.isRequired,
};

export default MealPlan;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box as MDBox, Typography as MDTypography, Button as MDButton, CircularProgress } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { BreakfastDining as BreakfastIcon, LunchDining as LunchIcon, DinnerDining as DinnerIcon } from '@mui/icons-material'; 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from "layouts/pages/profile/components/Header";
import { useLocation } from 'react-router-dom';
import { useMaterialUIController } from "context";

function TodayDate(index) {
  const today = new Date(); 
  console.log(index)
  // const dayNumber = parseInt(dayString.match(/\d+/), 10);

  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + (index+1));

  const formattedNextDay = nextDay.toLocaleDateString();
  return formattedNextDay

}

function Kanban() {
  // const today = new Date();
  // const formattedDate = today.toLocaleDateString();
  const location = useLocation();
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [expandedInstructions, setExpandedInstructions] = useState(false);
  const [expandedIngredients, setExpandedIngredients] = useState(false);
  const [expandedMeal, setExpandedMeal] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);
  const [mealPlan, setMealPlan] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const { numDays } = location.state || {};
  console.log(numDays);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/recommendation/recipeRecommendation", {
          params: { days: numDays },
          headers: {
            'jwt-token': `${localStorage.getItem('jwtToken')}`
          }
        });
        setMealPlan(response.data.meal_plan);
        setLoading(false); // Data loaded, set loading to false
        console.log(mealPlan);
      } catch (error) {
        console.error("There was an error fetching the meal plan:", error);
        setLoading(false); // Even if there's an error, stop loading
      }
    };

    fetchData();
  }, [numDays]);

  const handleToggleInstructions = () => setExpandedInstructions(!expandedInstructions);
  const handleToggleIngredients = () => setExpandedIngredients(!expandedIngredients);
  const handleExpandDay = (dayId) => setExpandedDay(expandedDay === dayId ? null : dayId);
  const handleMeal = () => setExpandedMeal(!expandedMeal);
  const icons = {
    breakfast: <BreakfastIcon sx={{ fontSize: 80, color: "#FFA500" }} />,
    lunch: <LunchIcon sx={{ fontSize: 80, color: "#FFA500" }} />,
    dinner: <DinnerIcon sx={{ fontSize: 80, color: "#FFA500" }} />
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Header />
        {loading ? (
          <MDBox display="flex" justifyContent="center" alignItems="center" height="30vh">
            <CircularProgress />
          </MDBox>
        ) : (
          <MDBox
            position="relative"
            my={4}
            sx={({
              palette: { light, background },
              functions: { pxToRem },
              borders: { borderRadius },
            }) => ({
              "& .react-kanban-column": {
                backgroundColor: darkMode ? background.card : light.main,
                width: "100%",
                margin: `0 ${pxToRem(10)}`,
                padding: pxToRem(20),
                borderRadius: borderRadius.lg,
                boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
              },
            })}
          >
            {mealPlan.map((dayPlan, index) => {
              const dayKey = `day ${index + 1}`;
              return (
                <MDBox key={dayKey} mb={4}>
                  <MDBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                    sx={{ borderBottom: '2px solid #FFA500', pb: 1 }}
                  >
                    <MDTypography variant="h4" sx={{ fontWeight: 'bold', color: '#FFA500' }}>{TodayDate(index)}</MDTypography>
                    <MDButton
                      size="small"
                      onClick={() => handleExpandDay(dayKey)}
                      sx={{
                        color: '#FFA500',
                        backgroundColor: 'rgba(255, 165, 0, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 165, 0, 0.2)',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        },
                        transition: 'background-color 0.3s, box-shadow 0.3s',
                        borderRadius: 1,
                        padding: 0.5
                      }}
                    >
                      {expandedDay === dayKey ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                    </MDButton>
                  </MDBox>
                  <Collapse in={expandedDay === dayKey}>
                    <MDBox display="flex" flexDirection="column" gap={2}>
                      {dayPlan[dayKey].map(meal => (
                        <MDBox key={meal.meal_name} display="flex" flexDirection="column" mb={3}>
                          <MDTypography variant="h6" sx={{ color: "#FFA500", fontWeight: 'bold' }}>
                            {icons[meal.meal_name]} 
                            {meal.meal_name} - {meal.meal_time}
                            <MDButton
                              size="small"
                              onClick={handleMeal}
                              sx={{
                                color: '#FFA500',
                                backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                '&:hover': {
                                  backgroundColor: 'rgba(255, 165, 0, 0.2)',
                                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                },
                                transition: 'background-color 0.3s, box-shadow 0.3s',
                                borderRadius: 1,
                                padding: 0.5,
                                marginLeft : 1,
                              }}
                            >
                              {expandedMeal ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                            </MDButton>
                          </MDTypography>
                          <Collapse in={expandedMeal}>
                            <MDBox display="flex" flexDirection="row" justifyContent="center" gap={3} mt={2}>
                              {Object.entries(meal).map(([mealType, details]) => {
                                if (mealType !== "meal_name" && mealType !== "meal_time") {
                                  return (
                                    <Card key={mealType} sx={{
                                      minWidth: 300,
                                      maxWidth: 400,
                                      borderRadius: 2,
                                      boxShadow: 3,
                                      border: '1px solid #FFA500',
                                      marginBottom: 2,
                                      '&:hover': {
                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                        transform: 'scale(1.02)',
                                        transition: 'all 0.3s ease'
                                      }
                                    }}>
                                      <CardContent>
                                        <MDTypography variant="h6" color="textPrimary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                          {icons[meal.meal_name]} {details.recipe_name}
                                        </MDTypography>
                                        <Divider sx={{ my: 1, bgcolor: '#FFA500' }} />
                                        <MDTypography variant="body2" color="textSecondary">
                                          {details.food_role.join(", ")}
                                        </MDTypography>
                                        <MDTypography variant="body2" color="textSecondary">
                                          Prep Time: {details.prep_time}
                                        </MDTypography>
                                        <MDTypography variant="body2" color="textSecondary">
                                          Cook Time: {details.cook_time}
                                        </MDTypography>
                                        <MDTypography variant="body2" color="textSecondary">
                                          Serves: {details.serves}
                                        </MDTypography>
                                        <Divider sx={{ my: 1, bgcolor: '#FFA500' }} />
                                        <MDTypography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                                          Ingredients:
                                          <MDButton
                                            size="small"
                                            onClick={handleToggleIngredients}
                                            sx={{
                                              color: '#FFA500',
                                              backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                              '&:hover': {
                                                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                              },
                                              transition: 'background-color 0.3s, box-shadow 0.3s',
                                              borderRadius: 1,
                                              padding: 0.5
                                            }}
                                          >
                                            {expandedIngredients ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                                          </MDButton>
                                        </MDTypography>
                                        <Collapse in={expandedIngredients}>
                                          <List>
                                            {details.ingredients.map((ingredient) => (
                                              <ListItem key={ingredient.name} sx={{ borderBottom: '1px solid #FFA500' }}>
                                                <MDTypography variant="body2" color="textSecondary">
                                                  {ingredient.name} ({ingredient.quantity.measure} {ingredient.quantity.unit})
                                                </MDTypography>
                                              </ListItem>
                                            ))}
                                          </List>
                                        </Collapse>
                                        <Divider sx={{ my: 1, bgcolor: '#FFA500' }} />
                                        <MDTypography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                                          Instructions:
                                          <MDButton
                                            size="small"
                                            onClick={handleToggleInstructions}
                                            sx={{
                                              color: '#FFA500',
                                              backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                              '&:hover': {
                                                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                              },
                                              transition: 'background-color 0.3s, box-shadow 0.3s',
                                              borderRadius: 1,
                                              padding: 0.5
                                            }}
                                          >
                                            {expandedInstructions ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                                          </MDButton>
                                        </MDTypography>
                                        <Collapse in={expandedInstructions}>
                                          {details.instructions.map((instruction) => (
                                            <MDTypography key={instruction.original_text} variant="body2" color="textSecondary" paragraph>
                                              {instruction.original_text}
                                            </MDTypography>
                                          ))}
                                        </Collapse>
                                      </CardContent>
                                    </Card>
                                  );
                                }
                                return null;
                              })}
                            </MDBox>
                          </Collapse>
                        </MDBox>
                      ))}
                    </MDBox>
                  </Collapse>
                </MDBox>
              );
            })}
          </MDBox>
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  BreakfastDining,
  LunchDining,
  DinnerDining,
  RestaurantMenu,
  ReceiptLong,
} from "@mui/icons-material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from "layouts/applications/kanban/components/Header";
import { useMaterialUIController } from "context";

// Sample data
const mealPlan = [
  {
    "day 1": [
      {
        meal_name: "breakfast",
        meal_time: "9:00 AM",
        Beverage: {
          recipe_name: "Negroni Sbagliato",
          food_role: ["Beverage", "Italian"],
          ingredients: [
            { name: "Prosecco", quantity: { measure: "3 oz", unit: "" } },
            { name: "Sweet Vermouth", quantity: { measure: "1 oz", unit: "" } },
            { name: "Campari", quantity: { measure: "1 oz", unit: "" } },
            { name: "Orange Slice", quantity: { measure: "1", unit: "garnish" } },
          ],
          prep_time: "10 minutes",
          cook_time: "0 minutes",
          total_time: "10 minutes",
          serves: "1",
          instructions: [
            { original_text: "Fill a glass with ice." },
            { original_text: "Pour Prosecco, sweet vermouth, and Campari over the ice." },
            { original_text: "Stir gently and garnish with an orange slice." },
          ],
        },
      },
      {
        meal_name: "lunch",
        meal_time: "1:00 PM",
        Main: {
          recipe_name: "Grilled Chicken Salad",
          food_role: ["Main Course", "Healthy"],
          ingredients: [
            { name: "Chicken Breast", quantity: { measure: "200g", unit: "" } },
            { name: "Mixed Greens", quantity: { measure: "2 cups", unit: "" } },
            { name: "Cherry Tomatoes", quantity: { measure: "1 cup", unit: "" } },
            { name: "Cucumber", quantity: { measure: "1", unit: "" } },
          ],
          prep_time: "15 minutes",
          cook_time: "20 minutes",
          total_time: "35 minutes",
          serves: "2",
          instructions: [
            { original_text: "Grill the chicken until cooked through." },
            { original_text: "Chop vegetables and mix in a bowl." },
            { original_text: "Slice chicken and add to the salad." },
            { original_text: "Dress with olive oil and lemon juice." },
          ],
        },
      },
      {
        meal_name: "dinner",
        meal_time: "7:00 PM",
        Main: {
          recipe_name: "Spaghetti Bolognese",
          food_role: ["Main Course", "Italian"],
          ingredients: [
            { name: "Spaghetti", quantity: { measure: "200g", unit: "" } },
            { name: "Ground Beef", quantity: { measure: "300g", unit: "" } },
            { name: "Tomato Sauce", quantity: { measure: "1 cup", unit: "" } },
            { name: "Onion", quantity: { measure: "1", unit: "" } },
          ],
          prep_time: "10 minutes",
          cook_time: "40 minutes",
          total_time: "50 minutes",
          serves: "4",
          instructions: [
            { original_text: "Cook spaghetti according to package instructions." },
            { original_text: "Sauté onions until translucent." },
            { original_text: "Add ground beef and cook until browned." },
            { original_text: "Stir in tomato sauce and simmer for 20 minutes." },
            { original_text: "Serve sauce over spaghetti." },
          ],
        },
      },
    ],
  },
  // Add more days as needed
];

function Recipes() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  // State management for collapsible sections
  const [expandedDays, setExpandedDays] = useState({});
  const [expandedMeals, setExpandedMeals] = useState({});

  const handleToggleDay = (dayKey) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayKey]: !prev[dayKey],
    }));
  };

  const handleToggleMeal = (dayKey, mealName) => {
    setExpandedMeals((prev) => ({
      ...prev,
      [`${dayKey}-${mealName}`]: !prev[`${dayKey}-${mealName}`],
    }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Header />
        <MDBox mt={4}>
          {mealPlan.map((dayPlan, dayIndex) => {
            const dayKey = Object.keys(dayPlan)[0];
            const meals = dayPlan[dayKey];
            return (
              <Card
                key={dayIndex}
                sx={{
                  mb: 2,
                  backgroundColor: darkMode ? "#1a2035" : "#ffffff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  {/* Day Header */}
                  <MDBox display="flex" alignItems="center" justifyContent="space-between">
                    <MDTypography variant="h5" fontWeight="medium">
                      {dayKey.toUpperCase()}
                    </MDTypography>
                    <IconButton onClick={() => handleToggleDay(dayKey)}>
                      {expandedDays[dayKey] ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </MDBox>
                  <Collapse in={expandedDays[dayKey]} timeout="auto" unmountOnExit>
                    {meals.map((meal, mealIndex) => {
                      const mealName = meal.meal_name;
                      const mealTime = meal.meal_time;
                      const mealDetails = Object.values(meal).find(
                        (item) => typeof item === "object"
                      );
                      const mealKey = `${dayKey}-${mealName}`;
                      const mealIcon =
                        mealName === "breakfast"
                          ? BreakfastDining
                          : mealName === "lunch"
                          ? LunchDining
                          : DinnerDining;
                      const MealIconComponent = mealIcon;

                      return (
                        <Card
                          key={mealIndex}
                          sx={{
                            mb: 2,
                            backgroundColor: darkMode ? "#202940" : "#f8f9fa",
                            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                          }}
                        >
                          <CardContent>
                            {/* Meal Header */}
                            <MDBox display="flex" alignItems="center" justifyContent="space-between">
                              <MDBox display="flex" alignItems="center">
                                <MealIconComponent sx={{ color: "#FFA500", mr: 1.5 }} />
                                <MDTypography variant="h6" fontWeight="medium">
                                  {mealName.charAt(0).toUpperCase() + mealName.slice(1)} - {mealTime}
                                </MDTypography>
                              </MDBox>
                              <IconButton onClick={() => handleToggleMeal(dayKey, mealName)}>
                                {expandedMeals[mealKey] ? <ExpandLess /> : <ExpandMore />}
                              </IconButton>
                            </MDBox>
                            <Collapse in={expandedMeals[mealKey]} timeout="auto" unmountOnExit>
                              {/* Recipe Name */}
                              <MDBox mt={2}>
                                <MDTypography variant="h6" fontWeight="medium" gutterBottom>
                                  {mealDetails.recipe_name}
                                </MDTypography>
                                <MDTypography
                                  variant="subtitle2"
                                  color="textSecondary"
                                  gutterBottom
                                >
                                  {mealDetails.food_role.join(", ")}
                                </MDTypography>
                                {/* Timing and Servings */}
                                <MDBox display="flex" flexWrap="wrap" gap={2} my={1}>
                                  <MDTypography variant="body2" color="textSecondary">
                                    <strong>Prep Time:</strong> {mealDetails.prep_time}
                                  </MDTypography>
                                  <MDTypography variant="body2" color="textSecondary">
                                    <strong>Cook Time:</strong> {mealDetails.cook_time}
                                  </MDTypography>
                                  <MDTypography variant="body2" color="textSecondary">
                                    <strong>Total Time:</strong> {mealDetails.total_time}
                                  </MDTypography>
                                  <MDTypography variant="body2" color="textSecondary">
                                    <strong>Serves:</strong> {mealDetails.serves}
                                  </MDTypography>
                                </MDBox>
                                <Divider />

                                {/* Ingredients */}
                                <MDBox mt={2}>
                                  <MDBox display="flex" alignItems="center">
                                    <RestaurantMenu sx={{ color: "#FFA500", mr: 1 }} />
                                    <MDTypography variant="h6" fontWeight="medium">
                                      Ingredients
                                    </MDTypography>
                                  </MDBox>
                                  <List dense>
                                    {mealDetails.ingredients.map((ingredient, idx) => (
                                      <ListItem key={idx}>
                                        <MDTypography variant="body2" color="textSecondary">
                                          • {ingredient.name} - {ingredient.quantity.measure}{" "}
                                          {ingredient.quantity.unit}
                                        </MDTypography>
                                      </ListItem>
                                    ))}
                                  </List>
                                </MDBox>

                                {/* Instructions */}
                                <MDBox mt={2}>
                                  <MDBox display="flex" alignItems="center">
                                    <ReceiptLong sx={{ color: "#FFA500", mr: 1 }} />
                                    <MDTypography variant="h6" fontWeight="medium">
                                      Instructions
                                    </MDTypography>
                                  </MDBox>
                                  <List dense>
                                    {mealDetails.instructions.map((instruction, idx) => (
                                      <ListItem key={idx}>
                                        <MDTypography variant="body2" color="textSecondary">
                                          Step {idx + 1}: {instruction.original_text}
                                        </MDTypography>
                                      </ListItem>
                                    ))}
                                  </List>
                                </MDBox>
                              </MDBox>
                            </Collapse>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </Collapse>
                </CardContent>
              </Card>
            );
          })}
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Recipes;

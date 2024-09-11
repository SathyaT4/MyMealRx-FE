import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MealCard from '../MealCard';

// DayCard component
function DayCard({ meals, onMealClick }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Responsive check for small screens

  // Group meals by type (e.g., Breakfast, Lunch, Dinner)
  const groupedMeals = meals.reduce((acc, meal) => {
    if (!acc[meal.meal_type]) {
      acc[meal.meal_type] = [];
    }
    acc[meal.meal_type].push(meal);
    return acc;
  }, {});

  return (
    <Card
      variant="outlined"
      sx={{
        margin: '10px auto',
        padding: '10px',
        maxWidth: '100%', // Ensure the card takes full width
        borderRadius: '8px', // Optional: rounded corners
        boxShadow: isSmallScreen ? 'none' : '0px 4px 10px rgba(0, 0, 0, 0.1)', // Shadow for larger screens
      }}
    >
      <CardContent>
        {Object.entries(groupedMeals).map(([mealType, mealList]) => (
          <Box key={mealType} mb={2}>
            <Box
              component="h3"
              sx={{
                textAlign: 'center',
                marginBottom: '10px',
                fontSize: isSmallScreen ? '16px' : '20px',
                fontWeight: 'bold',
              }}
            >
              Your Plan
            </Box>
            <Box
              display="flex"
              flexDirection={isSmallScreen ? 'column' : 'row'} // Stack meals vertically on small screens
              flexWrap="wrap" // Wrap meals to fit the container width
              justifyContent="center"
              gap={2}
            >
              {mealList.map((meal, index) => (
                <Box
                  key={index}
                  p={1}
                  sx={{
                    width: isSmallScreen ? '100%' : 'calc(33% - 16px)', // Full width on small screens, adjust for 3 columns on larger screens
                    flex: '1 1 auto', // Ensure the card grows to fill available space
                  }}
                >
                  <MealCard meal={meal} onDetailClick={onMealClick} />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

DayCard.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      meal_name: PropTypes.string.isRequired,
      meal_time: PropTypes.string.isRequired,
      meal_type: PropTypes.string.isRequired, // e.g., Breakfast, Lunch, Dinner
    })
  ).isRequired,
  onMealClick: PropTypes.func.isRequired,
};

export default DayCard;

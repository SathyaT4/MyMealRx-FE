import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function MealPlan({ numDays }) {
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        // Simulate a 3-second delay for demonstration
        setTimeout(async () => {
          try {
            const response = await axios.get('http://localhost:7000/recommendation/recipeRecommendation', {
              params: { days: numDays }
            });
            setMealData(response.data);
            setLoading(false); // Set loading to false after data is fetched
          } catch (err) {
            console.error('Error fetching meal data:', err);
            setError('Failed to fetch meal data'); // Set error message if there's an issue
            setLoading(false); // Ensure loading is set to false even if there's an error
          }
        }, 3000); // 3-second delay
      } catch (err) {
        console.error('Error fetching meal data:', err);
        setError('Failed to fetch meal data'); // Set error message if there's an issue
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    if (numDays) {
      fetchMealData();
    }
  }, [numDays]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ); // Show spinner centered on the page
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there's an issue
  }

  return (
    <div>
      <h2>Meal Plan for {numDays} Days</h2>
      <ul>
        {mealData.length > 0 ? (
          mealData.map((meal, index) => (
            <li key={index}>{meal.name}</li>
          ))
        ) : (
          <li>No meals available for the selected number of days.</li>
        )}
      </ul>
    </div>
  );
}

MealPlan.propTypes = {
  numDays: PropTypes.number.isRequired,
};

export default MealPlan;

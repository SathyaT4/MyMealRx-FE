import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button, Collapse, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, useTheme } from '@mui/system';

// Custom styles using `styled`
const StyledCard = styled(Card)(({ theme, isSmallScreen }) => ({
  margin: isSmallScreen ? '5px' : '10px',
  padding: isSmallScreen ? '5px' : '10px',
  background: 'linear-gradient(to right, #ffe5d9, #ffecb3)', // Light orange gradient
  boxShadow: theme.shadows[3],
}));

const ExpandButton = styled(Button)(({ theme, isSmallScreen }) => ({
  marginTop: theme.spacing(1),
  padding: isSmallScreen ? '4px 8px' : '6px 16px',
  fontSize: isSmallScreen ? '12px' : '14px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
}));

const ViewRecipeButton = styled(Button)(({ theme, isSmallScreen }) => ({
  marginTop: theme.spacing(2),
  padding: isSmallScreen ? '4px 8px' : '6px 16px',
  fontSize: isSmallScreen ? '12px' : '14px',
}));

// MealCard component
function MealCard({ meal, onDetailClick }) {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard variant="outlined" isSmallScreen={isSmallScreen}>
      <CardContent>
        <Typography variant={isSmallScreen ? 'subtitle1' : 'h6'}>{meal.meal_name}</Typography>
        <Typography variant="body2">Time: {meal.meal_time}</Typography>
        <ExpandButton
          onClick={handleExpandClick}
          endIcon={<ExpandMoreIcon />}
          isSmallScreen={isSmallScreen}
        >
          {expanded ? 'Hide Recipes' : 'Show Recipes'}
        </ExpandButton>
        <Collapse in={expanded}>
          <List>
            {meal.Beverage && (
              <ListItem>
                <ListItemText
                  primary={`Beverage: ${meal.Beverage.recipe_name}`}
                  secondary={`Total Time: ${meal.Beverage.total_time || 'N/A'}, Serves: ${meal.Beverage.serves || 'N/A'}`}
                />
              </ListItem>
            )}
            {meal["Main Course"] && (
              <ListItem>
                <ListItemText
                  primary={`Main Course: ${meal["Main Course"].recipe_name}`}
                  secondary={`Total Time: ${meal["Main Course"].total_time || 'N/A'}, Serves: ${meal["Main Course"].serves || 'N/A'}`}
                />
              </ListItem>
            )}
            {meal.Side && (
              <ListItem>
                <ListItemText
                  primary={`Side: ${meal.Side.recipe_name}`}
                  secondary={`Total Time: ${meal.Side.total_time || 'N/A'}, Serves: ${meal.Side.serves || 'N/A'}`}
                />
              </ListItem>
            )}
          </List>
          <ViewRecipeButton onClick={() => onDetailClick(meal)} isSmallScreen={isSmallScreen}>
            View More
          </ViewRecipeButton>
        </Collapse>
      </CardContent>
    </StyledCard>
  );
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    meal_name: PropTypes.string.isRequired,
    meal_time: PropTypes.string.isRequired,
    Beverage: PropTypes.shape({
      recipe_name: PropTypes.string,
      total_time: PropTypes.string,
      serves: PropTypes.string,
    }),
    "Main Course": PropTypes.shape({
      recipe_name: PropTypes.string,
      total_time: PropTypes.string,
      serves: PropTypes.string,
    }),
    Side: PropTypes.shape({
      recipe_name: PropTypes.string,
      total_time: PropTypes.string,
      serves: PropTypes.string,
    }),
  }).isRequired,
  onDetailClick: PropTypes.func.isRequired,
};

export default MealCard;

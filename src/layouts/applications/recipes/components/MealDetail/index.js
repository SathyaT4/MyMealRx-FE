import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, Typography, List, ListItem, ListItemText, Button, Collapse, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, useTheme } from '@mui/system';

// Custom styles using `styled`
const StyledDialogContent = styled(DialogContent)(({ theme, isSmallScreen }) => ({
  background: 'linear-gradient(to right, #ffe5d9, #ffecb3)', // Light orange gradient
  padding: isSmallScreen ? theme.spacing(1) : theme.spacing(2),
}));

const CollapseButton = styled(Button)(({ theme, isSmallScreen }) => ({
  marginTop: theme.spacing(1),
  padding: isSmallScreen ? '4px 8px' : '6px 16px',
  fontSize: isSmallScreen ? '12px' : '14px',
  background: 'rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
}));

const SectionTitle = styled(Typography)(({ isSmallScreen }) => ({
  fontWeight: 'bold',
  fontSize: isSmallScreen ? '1rem' : '1.25rem',
}));

const StyledListItem = styled(ListItem)(({ isSmallScreen }) => ({
  fontSize: isSmallScreen ? '0.8rem' : '0.9rem', // Smaller font size on mobile
}));

// MealDetail component
function MealDetail({ meal, open, onClose }) {
  const [expanded, setExpanded] = React.useState({
    Beverage: false,
    MainCourse: false,
    Side: false,
    BeverageIngredients: false,
    BeverageInstructions: false,
    MainCourseIngredients: false,
    MainCourseInstructions: false,
    SideIngredients: false,
    SideInstructions: false,
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExpandClick = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <StyledDialogContent isSmallScreen={isSmallScreen}>
        <Typography variant={isSmallScreen ? 'h5' : 'h4'}>{meal.meal_name}</Typography>
        <Typography variant="body1">Meal Time: {meal.meal_time}</Typography>

        {meal.Beverage && (
          <>
            <SectionTitle isSmallScreen={isSmallScreen} variant="h6">
              Beverage: {meal.Beverage.recipe_name}
            </SectionTitle>
            <CollapseButton
              onClick={() => handleExpandClick('Beverage')}
              endIcon={<ExpandMoreIcon />}
              isSmallScreen={isSmallScreen}
            >
              {expanded.Beverage ? 'Hide Details' : 'Show Details'}
            </CollapseButton>
            <Collapse in={expanded.Beverage}>
              <CollapseButton
                onClick={() => handleExpandClick('BeverageIngredients')}
                endIcon={<ExpandMoreIcon />}
                style={{ marginTop: '10px' }}
                isSmallScreen={isSmallScreen}
              >
                {expanded.BeverageIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
              </CollapseButton>
              <Collapse in={expanded.BeverageIngredients}>
                <Typography variant="subtitle1">Ingredients</Typography>
                <List>
                  {meal.Beverage.ingredients.map((ingredient, index) => (
                    <StyledListItem key={index} isSmallScreen={isSmallScreen}>
                      <ListItemText
                        primary={`${ingredient.quantity.measure} ${ingredient.name}`}
                      />
                    </StyledListItem>
                  ))}
                </List>
              </Collapse>
              <CollapseButton
                onClick={() => handleExpandClick('BeverageInstructions')}
                endIcon={<ExpandMoreIcon />}
                style={{ marginTop: '10px' }}
                isSmallScreen={isSmallScreen}
              >
                {expanded.BeverageInstructions ? 'Hide Instructions' : 'Show Instructions'}
              </CollapseButton>
              <Collapse in={expanded.BeverageInstructions}>
                <Typography variant="subtitle1">Instructions</Typography>
                <List>
                  {meal.Beverage.instructions.map((instruction, index) => (
                    <StyledListItem key={index} isSmallScreen={isSmallScreen}>
                      <ListItemText primary={instruction.original_text} />
                    </StyledListItem>
                  ))}
                </List>
              </Collapse>
            </Collapse>
          </>
        )}

        {meal["Main Course"] && (
          <>
            <SectionTitle isSmallScreen={isSmallScreen} variant="h6">
              Main Course: {meal["Main Course"].recipe_name}
            </SectionTitle>
            <CollapseButton
              onClick={() => handleExpandClick('MainCourse')}
              endIcon={<ExpandMoreIcon />}
              isSmallScreen={isSmallScreen}
            >
              {expanded.MainCourse ? 'Hide Details' : 'Show Details'}
            </CollapseButton>
            <Collapse in={expanded.MainCourse}>
              <CollapseButton
                onClick={() => handleExpandClick('MainCourseIngredients')}
                endIcon={<ExpandMoreIcon />}
                style={{ marginTop: '10px' }}
                isSmallScreen={isSmallScreen}
              >
                {expanded.MainCourseIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
              </CollapseButton>
              <Collapse in={expanded.MainCourseIngredients}>
                <Typography variant="subtitle1">Ingredients</Typography>
                <List>
                  {meal["Main Course"].ingredients.map((ingredient, index) => (
                    <StyledListItem key={index} isSmallScreen={isSmallScreen}>
                      <ListItemText
                        primary={`${ingredient.quantity.measure} ${ingredient.name}`}
                      />
                    </StyledListItem>
                  ))}
                </List>
              </Collapse>
              <CollapseButton
                onClick={() => handleExpandClick('MainCourseInstructions')}
                endIcon={<ExpandMoreIcon />}
                style={{ marginTop: '10px' }}
                isSmallScreen={isSmallScreen}
              >
                {expanded.MainCourseInstructions ? 'Hide Instructions' : 'Show Instructions'}
              </CollapseButton>
              <Collapse in={expanded.MainCourseInstructions}>
                <Typography variant="subtitle1">Instructions</Typography>
                <List>
                  {meal["Main Course"].instructions.map((instruction, index) => (
                    <StyledListItem key={index} isSmallScreen={isSmallScreen}>
                      <ListItemText primary={instruction.original_text} />
                    </StyledListItem>
                  ))}
                </List>
              </Collapse>
            </Collapse>
          </>
        )}

        {meal.Side && (
          <>
            <SectionTitle isSmallScreen={isSmallScreen} variant="h6">
              Side: {meal.Side.recipe_name}
            </SectionTitle>
            <CollapseButton
              onClick={() => handleExpandClick('Side')}
              endIcon={<ExpandMoreIcon />}
              isSmallScreen={isSmallScreen}
            >
              {expanded.Side ? 'Hide Details' : 'Show Details'}
            </CollapseButton>
            <Collapse in={expanded.Side}>
              <CollapseButton
                onClick={() => handleExpandClick('SideIngredients')}
                endIcon={<ExpandMoreIcon />}
                style={{ marginTop: '10px' }}
                isSmallScreen={isSmallScreen}
              >
                {expanded.SideIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
              </CollapseButton>
              <Collapse in={expanded.SideIngredients}>
                <Typography variant="subtitle1">Ingredients</Typography>
                <List>
                  {meal.Side.ingredients.map((ingredient, index) => (
                    <StyledListItem key={index} isSmallScreen={isSmallScreen}>
                      <ListItemText
                        primary={`${ingredient.quantity.measure} ${ingredient.name}`}
                      />
                    </StyledListItem>
                  ))}
                </List>
              </Collapse>
              <CollapseButton
                onClick={() => handleExpandClick('SideInstructions')}
                endIcon={<ExpandMoreIcon />}
                style={{ marginTop: '10px' }}
                isSmallScreen={isSmallScreen}
              >
                {expanded.SideInstructions ? 'Hide Instructions' : 'Show Instructions'}
              </CollapseButton>
              <Collapse in={expanded.SideInstructions}>
                <Typography variant="subtitle1">Instructions</Typography>
                <List>
                  {meal.Side.instructions.map((instruction, index) => (
                    <StyledListItem key={index} isSmallScreen={isSmallScreen}>
                      <ListItemText primary={instruction.original_text} />
                    </StyledListItem>
                  ))}
                </List>
              </Collapse>
            </Collapse>
          </>
        )}
      </StyledDialogContent>
    </Dialog>
  );
}

MealDetail.propTypes = {
  meal: PropTypes.shape({
    meal_name: PropTypes.string.isRequired,
    meal_time: PropTypes.string.isRequired,
    Beverage: PropTypes.shape({
      recipe_name: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.shape({
          measure: PropTypes.string.isRequired,
        }).isRequired,
        allergies: PropTypes.string,
      })),
      instructions: PropTypes.arrayOf(PropTypes.shape({
        original_text: PropTypes.string.isRequired,
      })),
    }),
    "Main Course": PropTypes.shape({
      recipe_name: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.shape({
          measure: PropTypes.string.isRequired,
        }).isRequired,
        allergies: PropTypes.string,
      })),
      instructions: PropTypes.arrayOf(PropTypes.shape({
        original_text: PropTypes.string.isRequired,
      })),
    }),
    Side: PropTypes.shape({
      recipe_name: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.shape({
          measure: PropTypes.string.isRequired,
        }).isRequired,
        allergies: PropTypes.string,
      })),
      instructions: PropTypes.arrayOf(PropTypes.shape({
        original_text: PropTypes.string.isRequired,
      })),
    }),
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MealDetail;

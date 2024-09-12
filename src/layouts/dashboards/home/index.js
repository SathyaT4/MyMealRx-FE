import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';
import Header from 'layouts/authentication/components/Header';

// Import images
import balanceddiet from '../../../assets/images/balanced-diet.jpg';
import mealreccomend from '../../../assets/images/diet-reccomd.jpg';
import mealevaluation from '../../../assets/images/meal-evaluation.jpeg';
import femaleOriented from '../../../assets/images/female-bg.jpeg';
import americanCulture from '../../../assets/images/indian.jpg';
import diabeticFriendly from '../../../assets/images/diabetic-freindly.jpeg';

// Custom styled components
const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: theme.palette.action.hover,
  },
  height: '100%',
}));

const ImageContainer = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  objectFit: 'cover',
  maxHeight: '200px',
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    opacity: 0.8,
  },
}));

const SectionTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#FFA500',
  marginBottom: '20px',
  textAlign: 'center',
}));

const GradientContainer = styled(Box)(() => ({
  background: 'linear-gradient(135deg, #FFDEAD 30%, #FFB6C1 100%)',
  minHeight: '100vh',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

// Data for Main Working Area Section
const MainWorkingArea = [
  {
    title: 'Female-Oriented Features',
    description: 'Explore meal plans and features designed specifically for female health and wellness, with a focus on balanced nutrition and personal preferences.',
    image: femaleOriented,
  },
  {
    title: 'Cultural Backgrounds',
    description: 'Discover meal plans that cater to various cultural backgrounds, including American, Indian, and African cuisines, promoting diverse and healthy eating habits.',
    image: americanCulture,
  },
  {
    title: 'Diabetic-Friendly Options',
    description: 'Find meal plans that are tailored for diabetic individuals, ensuring balanced and health-conscious choices.',
    image: diabeticFriendly,
  },
];

// Data for Features Section
const MyMealRXFeatures = [
  {
    title: 'Balanced Diets',
    description: 'Promoting healthy, balanced diets that include a variety of nutrients essential for optimal well-being.',
    image: balanceddiet,
  },
  {
    title: 'Personalized Meal Recommendations',
    description: 'Tailor-made meal plans based on your preferences, lifestyle, and dietary needs.',
    image: mealreccomend,
  },
  {
    title: 'Meal Evaluation',
    description: 'Evaluate your meals to ensure they meet your dietary and nutritional goals.',
    image: mealevaluation,
  },
];

// Component for rendering feature cards
function FeatureCard({ feature }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomCard>
        <ImageContainer src={feature.image} alt={feature.title} />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFA500', mb: 2 }}>
            {feature.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {feature.description}
          </Typography>
        </CardContent>
      </CustomCard>
    </Grid>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Component for rendering application cards
function ApplicationCard({ application }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomCard>
        <ImageContainer src={application.image} alt={application.title} />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFA500', mb: 2 }}>
            {application.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {application.description}
          </Typography>
        </CardContent>
      </CustomCard>
    </Grid>
  );
}

ApplicationCard.propTypes = {
  application: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// HomePage Component
function Analytics() {
  return (
    <GradientContainer>
      <Header />
      <Box py={3} sx={{ width: '100%' }}>

        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#FFA500' }}>
            About Us
          </Typography>
        </Box>

        <Box mt={6} sx={{ width: '100%' }}>
          <SectionTitle>Key Features</SectionTitle>
          <Grid container spacing={3}>
            {MyMealRXFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </Grid>
        </Box>

        <Box mt={6} sx={{ width: '100%' }}>
          <SectionTitle>Main Working Area</SectionTitle>
          <Grid container spacing={3}>
            {MainWorkingArea.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.title}>
                <CustomCard>
                  <ImageContainer src={item.image} alt={item.title} />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFA500', mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </GradientContainer>
  );
}

export default Analytics;

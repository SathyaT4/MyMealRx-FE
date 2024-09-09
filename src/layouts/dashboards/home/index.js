import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Typography, Card, CardContent, Button, Box, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { Balance, Recommend, Assessment } from '@mui/icons-material';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'; // Adjust the path accordingly
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'; // Adjust the path accordingly
import Footer from 'examples/Footer'; // Adjust the path accordingly
import balanceddiet from '../../../assets/images/balanced-diet.jpg';
import mealreccomend from '../../../assets/images/diet-reccomd.jpg';
import mealevaluation from '../../../assets/images/meal-evaluation.jpeg';
import school from '../../../assets/images/schools.jpeg';

// Keyframes for blinking effect
const blinkAnimation = `
  @keyframes blink {
    0% { background-color: #FFA500; }
    50% { background-color: #FF5722; }
    100% { background-color: #FFA500; }
  }
`;

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

const CustomIcon = styled('div')(({ theme }) => ({
  color: theme.palette.warning.main,
  fontSize: '40px',
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

const BlinkingButton = styled(Button)(() => ({
  mt: 2,
  backgroundColor: '#FFA500',
  '&:hover': { backgroundColor: '#FF5722' },
  animation: `${blinkAnimation} 1s step-start infinite`,
}));

const MyMealRXFeatures = [
  {
    title: 'Balancing Convenience and Nutrition',
    description: 'My Meal RX ensures your meals are both convenient and nutritious, helping you stick to your diet over the long term.',
    icon: <Balance />,
    image: balanceddiet,
  },
  {
    title: 'Personalized Meal Recommendations',
    description: 'Get meal plans tailored to your dietary restrictions, preferences, and health goals using advanced AI.',
    icon: <Recommend />,
    image: mealreccomend,
  },
  {
    title: 'Evaluation Metrics',
    description: 'Our unique metrics ensure your meal plans are diverse, nutritious, and satisfy your personal constraints.',
    icon: <Assessment />,
    image: mealevaluation,
  },
];

const MyMealRXApplications = [
  {
    title: 'Schools',
    description: 'Implement My Meal RX for creating nutritious and convenient meal plans for students, promoting healthy eating habits.',
    image: school,
  },
  {
    title: 'Hospitals',
    description: 'Use My Meal RX to provide personalized, nutritious meals for patients, tailored to their specific dietary needs.',
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d',
  },
  {
    title: 'Personalized Meal Planning',
    description: 'Whether you have dietary restrictions or health goals, My Meal RX can create meal plans that fit your lifestyle.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
  },
];

function SectionTitle({ children }) {
  return (
    <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#FFA500' }}>
      {children}
    </Typography>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

function FeatureCard({ feature }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomCard>
        <ImageContainer src={feature.image} alt={feature.title} />
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <CustomIcon>{feature.icon}</CustomIcon>
            <Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold', color: '#FFA500' }}>
              {feature.title}
            </Typography>
          </Box>
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
    icon: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

function ApplicationCard({ application }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <CustomCard>
        <ImageContainer src={application.image} alt={application.title} />
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#FFA500' }}>
              {application.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" textAlign="center" sx={{ mt: 1 }}>
              {application.description}
            </Typography>
          </Box>
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

function HomePage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  console.log(isAuthenticated)
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate('/dashboards/generator');
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box py={3} sx={{ backgroundColor: '#FFF8E1', position: 'relative', width: '100%', mx: 'auto' }}>
        {showAlert && (
          <Alert
            severity="info"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1300,
              width: 'auto',
            }}
          >
            Welcome! Click on Get Started to generate your meals.
          </Alert>
        )}

        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#FFA500' }}>
            Welcome to My Meal RX
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Balancing Convenience and Nutrition in Meals
          </Typography>
          <BlinkingButton variant="contained" color="warning" size="large" onClick={handleClick}>
            Get Started
          </BlinkingButton>
        </Box>

        <Box mt={6}>
          <SectionTitle>Key Features</SectionTitle>
          <Grid container spacing={3}>
            {MyMealRXFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </Grid>
        </Box>

        <Box mt={6}>
          <SectionTitle>Applications</SectionTitle>
          <Grid container spacing={3}>
            {MyMealRXApplications.map((application) => (
              <ApplicationCard key={application.title} application={application} />
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default HomePage;

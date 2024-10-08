import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormField from 'layouts/applications/wizard/components/FormField';
import { styled } from '@mui/material/styles';
import profile from "assets/images/icons8-glyph-96.png"

// Custom styled components
const Container = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #FFFAF0 0%, #FFDEDE 100%)',
  borderRadius: '15px',
  padding: theme.spacing(4),
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));


const SelectedButton = styled(Button)(() => ({
  backgroundColor: '#FF8C00',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF6F00',
  },
}));



function About({ handleDataChange }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBodyFat, setSelectedBodyFat] = useState('');

  useEffect(() => {
    handleDataChange({
      firstName,
      lastName,
      phoneNumber,
      age,
      weight,
      height,
      gender: selectedGender,
      bodyFat: selectedBodyFat
    });
  }, [firstName, lastName, phoneNumber, age, weight, height, selectedGender, selectedBodyFat]);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleBodyFatSelect = (bodyFat) => {
    setSelectedBodyFat(bodyFat);
  };

  return (
    <Container>
      <Box width="82%" textAlign="center" mx="auto" my={4}>
        <img src={profile} alt="Profile" style={{ width: '10%', borderRadius: '8px', marginBottom: '16px' }} />
        <Box mb={1}>
          <Typography variant="h5" fontWeight="regular">
            Update Your Information
          </Typography>
        </Box>
        <Typography variant="body2" color="text">
          Provide your personal details below. This information will help us tailor your experience.
        </Typography>
      </Box>
      <Box mt={2}>
        <Grid container spacing={3}>
          {/* Row 1 */}
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <FormField
                type="text"
                label="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <FormField
                type="text"
                label="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <FormField
                type="text"
                label="Phone Number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <FormField
                type="number"
                label="Age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Box>
          </Grid>

          {/* Row 3 */}
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <FormField
                type="number"
                label="Weight (kg)"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <FormField
                type="number"
                label="Height (cm)"
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <Typography variant="body1">
                Gender
              </Typography>
              <ButtonGroup fullWidth>
                <SelectedButton
                  sx={selectedGender === 'Male' ? {} : { backgroundColor: '#FFBE8C', color: '#000000' }}
                  onClick={() => handleGenderSelect('Male')}
                >
                  Male
                </SelectedButton>
                <SelectedButton
                  sx={selectedGender === 'Female' ? {} : { backgroundColor: '#FFBE8C', color: '#000000' }}
                  onClick={() => handleGenderSelect('Female')}
                >
                  Female
                </SelectedButton>
                <SelectedButton
                  sx={selectedGender === 'non-binary' ? {} : { backgroundColor: '#FFBE8C', color: '#000000' }}
                  onClick={() => handleGenderSelect('non-binary')}
                >
                  Non-binary
                </SelectedButton>
              </ButtonGroup>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <Typography variant="body1">
                Body Fat Level
              </Typography>
              <ButtonGroup fullWidth>
                <SelectedButton
                  sx={selectedBodyFat === 'low' ? {} : { backgroundColor: '#FFBE8C', color: '#000000' }}
                  onClick={() => handleBodyFatSelect('low')}
                >
                  Low
                </SelectedButton>
                <SelectedButton
                  sx={selectedBodyFat === 'medium' ? {} : { backgroundColor: '#FFBE8C', color: '#000000' }}
                  onClick={() => handleBodyFatSelect('medium')}
                >
                  Medium
                </SelectedButton>
                <SelectedButton
                  sx={selectedBodyFat === 'high' ? {} : { backgroundColor: '#FFBE8C', color: '#000000' }}
                  onClick={() => handleBodyFatSelect('high')}
                >
                  High
                </SelectedButton>
              </ButtonGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

// Define prop types for the About component
About.propTypes = {
  handleDataChange: PropTypes.func.isRequired,
};

export default About;

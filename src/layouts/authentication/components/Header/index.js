import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import mealRxLogo from "assets/images/mealicon.png"; // Import your logo image

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #FFA500 0%, #FF6347 100%)", // Gradient background
        padding: { xs: "10px 0", sm: "15px 0" }, // Padding for different screen sizes
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for better visual separation
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Website Name and Icon */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={mealRxLogo}
              alt="My Meal RX Logo"
              sx={{ width: "40px", height: "40px", mr: 1 }} // Adjust size as needed
            />
            <Typography
              variant="h5" // Larger text for the website name
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              My Meal RX
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/dashboard/analytics"
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" }, 
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", 
                },
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/dashboard/sales"
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Button hover effect
                },
              }}
            >
              How It Works
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to="/sign-in"
              sx={{
                borderColor: "white",
                borderRadius: "20px", // Rounded edges for the button
                fontSize: { xs: "0.8rem", sm: "1rem" },
                padding: { xs: "5px 10px", sm: "7px 15px" }, // Adjust padding for different screen sizes
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Button hover effect
                },
              }}
            >
              Sign In / Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

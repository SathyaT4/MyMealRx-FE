import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Consolidated imports
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Images
import bgImage from "assets/images/illustrations/reset.jpg";

function Cover() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      if (!agree) {
        setError("You must agree to the terms and conditions");
        return;
      }

      const response = await axios.post("http://localhost:7000/auth/new", {
        name,
        email,
        password,
      });

      const { token } = response.data;
  

      // Store token in localStorage or sessionStorage
      localStorage.setItem("jwtToken", token);

      // Redirect to sign-in or another page
      navigate("/authentication/sign-in?redirectFromSignUp=true');");
    } catch (signupError) {
      setError("Failed to register. Please try again.");
      console.error("Registration error: ", signupError);
    }
  };

  return (
    <IllustrationLayout
      title="Join us Today"
      description="Enter your email and password to register"
      illustration={bgImage}
    >
      <Card sx={{ padding: '16px', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={(e) => e.preventDefault()}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ backgroundColor: '#fff3e0', borderColor: '#ff9800', '& .MuiInputLabel-root': { color: '#ff9800' } }}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                sx={{ '& .MuiCheckbox-root': { color: '#ff9800' } }}
              />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1, color: '#ff9800' }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
                sx={{ color: '#ff9800' }}
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            {error && (
              <MDBox mb={2}>
                <MDTypography variant="caption" color="error">
                  {error}
                </MDTypography>
              </MDBox>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={handleSignUp}
                sx={{ background: 'linear-gradient(45deg, #ff9800 30%, #ff5722 90%)', '&:hover': { background: 'linear-gradient(45deg, #ff5722 30%, #ff9800 90%)' } }}
              >
                Sign Up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                  sx={{ color: '#ff9800' }}
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </IllustrationLayout>
  );
}

export default Cover;

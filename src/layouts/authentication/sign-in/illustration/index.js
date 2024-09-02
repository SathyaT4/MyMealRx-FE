import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import bgImage from "assets/images/illustrations/reset.jpg";

function Illustration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [err, setError] = useState("");
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = async () => {
    try {
      const response = await axios.post("https://api.yourdomain.com/auth/login", {
        email,
        password,
      });

      const { token } = response.data;

      if (rememberMe) {
        localStorage.setItem("jwtToken", token);
      } else {
        sessionStorage.setItem("jwtToken", token);
      }

      // Redirect to dashboard or any other page
      navigate("/dashboard/analytics");
    } catch (loginError) {
      setError("Invalid email or password");
      console.error("Login error: ", loginError);
    }
  };

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={bgImage}
    >
      <MDBox component="form" role="form" onSubmit={(e) => e.preventDefault()}>
        <MDBox mb={2}>
          <MDInput
            type="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: '#fff3e0',
              borderColor: '#ff9800',
              '& .MuiInputLabel-root': { color: '#ff9800' }
            }}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: '#fff3e0',
              borderColor: '#ff9800',
              '& .MuiInputLabel-root': { color: '#ff9800' }
            }}
          />
        </MDBox>
        <MDBox display="flex" alignItems="center" ml={-1}>
          <Switch
            checked={rememberMe}
            onChange={handleSetRememberMe}
            sx={{
              '& .MuiSwitch-thumb': { backgroundColor: '#ff9800' },
              '& .MuiSwitch-track': { backgroundColor: '#ffcc80' }
            }}
          />
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{
              cursor: "pointer",
              userSelect: "none",
              ml: -1,
              color: '#ff9800'
            }}
          >
            &nbsp;&nbsp;Remember me
          </MDTypography>
        </MDBox>
        {err && (
          <MDBox mb={2}>
            <MDTypography variant="caption" color="error">
              {err}
            </MDTypography>
          </MDBox>
        )}
        <MDBox mt={4} mb={1}>
          <MDButton
            variant="gradient"
            color="info"
            size="large"
            fullWidth
            onClick={handleSignIn}
            sx={{
              background: 'linear-gradient(45deg, #ff9800 30%, #ff5722 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff5722 30%, #ff9800 90%)'
              }
            }}
          >
            Sign In
          </MDButton>
        </MDBox>
        <MDBox mt={3} textAlign="center">
          <MDTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MDTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="orange"
              fontWeight="medium"
              textGradient
            >
              Sign Up
            </MDTypography>
          </MDTypography>
        </MDBox>
      </MDBox>
    </IllustrationLayout>
  );
}

export default Illustration;

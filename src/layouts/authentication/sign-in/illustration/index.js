import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import MDAlert from "components/MDAlert";
import bgImage from "assets/images/illustrations/reset.jpg";

function Illustration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirectFromSignUp = queryParams.get('redirectFromSignUp');

  const handleSetRememberMe = () => setRememberMe((prev) => !prev);
  
  const showError = (message) => {
    setError(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post("10.1.0.105:7000/auth/login", {
        email,
        password,
      });
      const { type, user, token } = response.data;

      if (type === "success" && user && token) {
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("email", email);
        localStorage.setItem("usernme", user.name);
        localStorage.setItem("authenticated", true);
        if (redirectFromSignUp === "true") {
          navigate("/applications/newuser");
        } else {
          navigate("/dashboards/generator");
        }
      } else {
        showError("Login failed. Please check your credentials.");
      }
    } catch (loginError) {
      const message = loginError.response?.data?.message || "An error occurred. Please try again.";
      showError(message);
      console.error("Login error: ", loginError);
    }
  };

  return (
    <IllustrationLayout
      title="Welcome Back!"
      description="Sign in with your credentials"
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
              backgroundColor: "#fff7e0",
              borderColor: "#ff9800",
              '& .MuiInputLabel-root': { color: "#ff9800" },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: "#ff9800" },
                '&:hover fieldset': { borderColor: "#ff5722" },
              },
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
              backgroundColor: "#fff7e0",
              borderColor: "#ff9800",
              '& .MuiInputLabel-root': { color: "#ff9800" },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: "#ff9800" },
                '&:hover fieldset': { borderColor: "#ff5722" },
              },
            }}
          />
        </MDBox>
        <MDBox display="flex" alignItems="center" ml={-1}>
          <Switch
            checked={rememberMe}
            onChange={handleSetRememberMe}
            sx={{
              '& .MuiSwitch-thumb': { backgroundColor: "#ff9800" },
              '& .MuiSwitch-track': { backgroundColor: "#ffcc80" },
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
              color: "#ff9800",
            }}
          >
            &nbsp;&nbsp;Remember me
          </MDTypography>
        </MDBox>
        {showAlert && (
          <MDBox mb={2}>
            <MDAlert color="error" dismissible>
              {error}
            </MDAlert>
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
              background: "linear-gradient(135deg, #ff7e5f 30%, #feb47b 90%)", // Vibrant gradient
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 0",
              borderRadius: "8px",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
              transition: "background 0.3s ease-in-out",
              '&:hover': {
                background: "linear-gradient(135deg, #feb47b 30%, #ff7e5f 90%)",
                boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
              },
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
              color="warning"
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

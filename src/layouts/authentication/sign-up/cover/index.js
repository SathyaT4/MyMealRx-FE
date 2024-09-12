import { useState } from "react";
import { Link } from "react-router-dom"; // Consolidated imports
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({}); // To handle field-specific errors

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isSmallScreen);

  const handleSignUp = async () => {
    try {
      // Clear existing error messages
      setError("");
      setValidationErrors({});
      
      if (!agree) {
        setError("You must agree to the terms and conditions");
        return;
      }

      const response = await axios.post("10.1.0.105:7000/auth/new", {
        name,
        email,
        password,
      });

      // Assuming 200 status means success
      if (response.data.type === "success") {
        setMessage("User is registered. Just verify from your email.");
        setName("");
        setEmail("");
        setPassword("");
        setAgree(false);

        // const { token } = response.data;
        // localStorage.setItem("jwtToken", token);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        // Handle non-200 responses if needed
        setError(response.data.result);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (signupError) {
      if (signupError.response && signupError.response.data) {
        const { status, data } = signupError.response;
        
        // Handle validation errors from backend
        if (status === 400 && data.errors) {
          setValidationErrors(data.errors);
        } else if (status === 409) {
          setError("Email already in use. Please try with a different email.");
        } else {
          // General server-side error
          setError("Failed to register. Please try again.");
        }
      } else {
        // Client-side or network error
        setError("Network error. Please check your connection and try again.");
      }
      setMessage(""); // Clear success message if there's an error
    }
  };

  return (
    <IllustrationLayout
      title="Join us Today"
      description="Enter your email and password to register"
      illustration={bgImage}
    >
      <Card sx={{ padding: "16px", backgroundColor: "#fff3e0", borderRadius: "8px" }}>
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
                error={!!validationErrors.name}
                helperText={validationErrors.name || ""}
                sx={{
                  backgroundColor: "#fff3e0",
                  borderColor: "#ff9800",
                  "& .MuiInputLabel-root": { color: "#ff9800" },
                }}
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
                error={!!validationErrors.email}
                helperText={validationErrors.email || ""}
                sx={{
                  backgroundColor: "#fff3e0",
                  borderColor: "#ff9800",
                  "& .MuiInputLabel-root": { color: "#ff9800" },
                }}
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
                error={!!validationErrors.password}
                helperText={validationErrors.password || ""}
                sx={{
                  backgroundColor: "#fff3e0",
                  borderColor: "#ff9800",
                  "& .MuiInputLabel-root": { color: "#ff9800" },
                }}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                sx={{ "& .MuiCheckbox-root": { color: "#ff9800" } }}
              />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1, color: "#ff9800" }}
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
                sx={{ color: "#ff9800" }}
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
                sx={{
                  background: "linear-gradient(45deg, #ff9800 30%, #ff5722 90%)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #ff5722 30%, #ff9800 90%)",
                  },
                }}
              >
                Sign Up
              </MDButton>

              {/* Conditionally show success or error message */}
              {message && (
                <span
                  style={{
                    display: "block",
                    color: "#fff",
                    backgroundColor: "#4CAF50", // Green background for success
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                  }}
                >
                  {message}
                </span>
              )}

              {error && (
                <span
                  style={{
                    display: "block",
                    color: "#fff",
                    backgroundColor: "#f44336", // Red background for error
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    marginTop: "15px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                  }}
                >
                  {error}
                </span>
              )}
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
                  sx={{ color: "#ff9800" }}
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

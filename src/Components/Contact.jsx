import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";


// Create a default theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
    },
  },
});

// Custom styled components for hover effects with fallback
const StyledTextField = styled(TextField)(({ theme }) => ({
  "&:hover .MuiOutlinedInput-root": {
    borderColor: theme?.palette?.primary?.main || "#1976d2", // Fallback color
    transition: "border-color 0.3s ease-in-out",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: theme?.palette?.primary?.main || "#1976d2",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme?.palette?.primary?.main || "#1976d2",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "12px 0",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "4px",
  transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#1565c0",
    transform: "scale(1.02)",
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          message: "",
        });
      } else {
        Swal.fire("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("An error occurred. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#fff",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "500px" },
            maxWidth: "500px",
            padding: { xs: "20px", sm: "30px" },
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={() => console.log("Close form")}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#666",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Tell us a bit about yourself, and we’ll get in touch soon.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <StyledTextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />

              <StyledTextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />

              <StyledTextField
                label="Email"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />

              <StyledTextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />

              <StyledButton type="submit" fullWidth>
                Send Message
              </StyledButton>
            </Box>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default ContactForm;

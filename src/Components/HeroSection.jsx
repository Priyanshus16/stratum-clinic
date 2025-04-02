import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import heroimage from "../assets/heroimage.png";
import { useNavigate } from "react-router-dom";
import AppointmentBooking from "./ApointmentBooking";
// import herobackgroundimage from "../assets/herobgimg.jpg";
// import CustomButton from "../Components/CustomButton";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#f0f4ff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        // py: 5,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 6, // Added gap for better spacing
          p: 3, // Padding for spacing around the section
        }}
      >
        {/* Left Side (Text Content) */}
        <Box sx={{ flex: 1, maxWidth: 500 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get Appointment
            <br />
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Book your doctor's appointment online – Fast, Easy, Secure!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => navigate("/AppointmentBooking")}
            >
              Appointment
            </Button>
            <Button variant="outlined">Click Our Plan</Button>
          </Box>
          <Box
            sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 4 }}
          >
            <Typography variant="h6">
              50k+ <br />
              <small>Happy Patients</small>
            </Typography>
            <Typography variant="h6">
              350+ <br />
              <small>Specialist Doctors</small>
            </Typography>
            <Typography variant="h6">
              98% <br />
              <small>Our Success Rate</small>
            </Typography>
          </Box>
        </Box>

        {/* Right Side (Doctor's Image) */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img
            src={heroimage}
            alt="Doctor"
            style={{ width: "100%", maxWidth: "350px", borderRadius: "10px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

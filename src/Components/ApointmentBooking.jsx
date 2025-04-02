import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Typography,
  Container,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    category: "",
    mobile: "",
    email: "",
    problemDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, mobile: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:5000/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await Swal.fire({
          title: "Appointment Booked!",
          text: "We will reach you shortly.",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset values without causing unnecessary reflow
        setFormData((prevData) => ({
          ...prevData,
          name: "",
          age: "",
          gender: "",
          category: "",
          mobile: "",
          email: "",
          problemDescription: "",
        }));
      } else {
        await Swal.fire({
          title: "Booking Failed",
          text: "Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("An error occurred. Please try again.");
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f0f4ff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 3 },
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Book an Appointment
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </TextField>
          <TextField
            select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="Skin Issue">Skin Issue</MenuItem>
            <MenuItem value="Fungal Issue">Fungal Issue</MenuItem>
            <MenuItem value="Hair Issue">Hair Issue</MenuItem>
          </TextField>
          <PhoneInput
            country={"in"} // Default to India
            value={formData.mobile}
            onChange={handlePhoneChange}
            inputStyle={{
              width: "100%",
              height: "56px",
              borderRadius: "4px",
              border: "1px solid rgba(0, 0, 0, 0.23)",
              paddingLeft: "50px",
            }}
            buttonStyle={{
              border: "none",
              background: "transparent",
              padding: "0 10px",
            }}
            required
          />
          <TextField
            label="Email (Optional)"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Problem Description (Optional)"
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentBooking;

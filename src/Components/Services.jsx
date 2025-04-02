import React from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";


import ser1 from "../assets/ser1.jpeg"; // replace with actual image path
import service2 from "../assets/ser2.jpeg"; // replace with actual image path
import service3 from "../assets/ser3.jpeg"; // replace with actual image path
import service4 from "../assets/ser4.jpeg"; // replace with actual image path
import service5 from "../assets/ser5.jpeg"; // replace with actual image path

const ServiceBox = ({ title, image, content }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: 3,
        marginBottom: 3,
        padding: 3,
      }}
    >
      {/* Left Section (Image) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: 2, md: 0 }, // margin for small screens
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "400px", // limit the image size
            borderRadius: "10px",
          }}
        />
      </Box>

      {/* Right Section (Text) */}
      <Box
        sx={{
          flex: 2,
          paddingLeft: { xs: 0, md: 3 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {content}
        </Typography>
        <Button variant="contained" color="primary">
          Explore
        </Button>
      </Box>
    </Box>
  );
};

const Services = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Our Services
      </Typography>

      {/* Service Boxes */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ServiceBox
            title="Facial"
            image={ser1}
            content="Facial treatments aim to rejuvenate and improve the health of your skin. With customized treatments, we focus on clearing skin, reducing signs of aging, and enhancing your natural glow."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ServiceBox
            title="Rhinoplasty"
            image={service2}
            content="Rhinoplasty, also known as a nose job, is a procedure that can enhance the shape, structure, and function of your nose, providing a more balanced facial appearance."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ServiceBox
            title="Eye Restructure"
            image={service3}
            content="Our eye structure services focus on enhancing the appearance of your eyes, whether it's for eyelid surgery or restoring symmetry to your eyes, giving you a refreshed look."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ServiceBox
            title="Fungal Treatment"
            image={service4}
            content="We offer specialized treatments for fungal infections affecting the skin, nails, and scalp. Our expert dermatologists provide effective, long-lasting solutions."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ServiceBox
            title="Ear Recreation"
            image={service5}
            content="Ear recreation surgery is aimed at reconstructing or reshaping the ears for individuals born with deformities or those affected by trauma, helping restore both function and aesthetic."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;

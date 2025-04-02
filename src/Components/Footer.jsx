import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#0b2545",
        color: "white",
        p: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        gap: 4,
      }}
    >
      <Box maxWidth={{ xs: "100%", md: "50%" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Address
        </Typography>
        <Typography variant="body1" paragraph>
          Arcadia 604,6th floor, South City II, Sector 49, Gurugram, Haryana
          122018 Phone : 0124-4367729, 9310115620
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#2ecc71", fontWeight: "bold", mt: 2 }}
          onClick={() =>{ navigate("/AppointmentBooking"), window.scrollTo(0,0)}}
        >
          Book Your Appointment
        </Button>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight="bold">
          Email
        </Typography>
        <Link
          href="mailto:stratumskinclinic@gmail.com"
          color="inherit"
          underline="none"
          display="block"
        >
          stratumskinclinic@gmail.com
        </Link>
        <Typography variant="h6" fontWeight="bold" mt={2}>
          Phone
        </Typography>
        <Link
          href="tel:+919310115620"
          color="inherit"
          underline="none"
          display="block"
        >
          (+91) 9310115620
        </Link>
        <Typography variant="h6" fontWeight="bold" mt={2}>
          Phone
        </Typography>
        <Link
          href="tel:+919711223686"
          color="inherit"
          underline="none"
          display="block"
        >
          (+91) 9711223686
        </Link>
        <Typography variant="h6" fontWeight="bold" mt={2}>
          Phone
        </Typography>
        <Link href="tel:+91" color="inherit" underline="none" display="block">
          01244367729
        </Link>
        {/* <Typography variant="h6" fontWeight="bold" mt={2}>
          Address
        </Typography>
        <Typography variant="body2">
          1 Paya Lebar Link
          <br />
          #04-01, Paya Lebar Quarter
          <br />
          Singapore, 408533
        </Typography> */}
      </Box>
      <Box
        display="flex"
        gap={2}
        mt={2}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <Link href="https://x.com/manishsoni2003" color="inherit">
          <Twitter />
        </Link>
        <Link
          href="https://www.facebook.com/drmanishsonidermatology/cd"
          color="inherit"
        >
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/dr_manishsoni" color="inherit">
          <Instagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dr-manish-soni-30846927/"
          color="inherit"
        >
          <LinkedIn />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

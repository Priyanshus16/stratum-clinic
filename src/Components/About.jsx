import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import aboutimg1 from "../assets/about-1.jpg"; // replace with your image path
import aboutimg2 from "../assets/about-2.jpg"; // replace with your image path

const About = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      {/* First Box (Text Left, Image Right) */}
      <Typography variant="h3" gutterBottom textAlign="center">
        About Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: 3,
          mb: 5, // margin bottom between sections
          padding: 3,
        }}
      >
        {/* Left Section (Text) */}
        <Box
          sx={{
            flex: 2,
            paddingRight: { xs: 0, md: 3 },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 3, md: 0 }, // Margin bottom for small screens
          }}
        >
          <Typography variant="h5" gutterBottom>
            <b>Teaching since 15+ years</b>
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", mx: 2 }}>
            Dr. Manish Soni is a Dermatologist who has done MBBS,{" "}
            <b>MD(Gold Medalist) in Dermatology</b>. Later he pursued IADVL
            Fellowship from prestigious <b>‘AIIMS, New Delhi’</b>. He's been{" "}
            <b>awarded Gold Medal twice</b>. His work in Dermatology is
            published in reputed National and International journals. Presented
            papers at many national and International conferences. Having{" "}
            <b>
              experience of 15 years with ethical and best in class methods of
              treatment
            </b>
            . Accurate diagnosis, specific treatment related to illness and
            empathetic behaviour towards his patients. Dr. Manish Soni stands as
            the <b>best Dermatologist in Gurgaon</b>. Stratum skin & hair clinic
            is one of the best hair transplant, skin clinic in Gurugram,
            aesthetic centre, providing a wide range of skin care services.
          </Typography>
        </Box>

        {/* Right Section (Image) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={aboutimg1}
            alt="About Us"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              maxWidth: "400px", // limit image size
            }}
          />
        </Box>
      </Box>

      {/* Second Box (Image Left, Text Right) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: 3,
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
            paddingRight: { xs: 0, md: 3 },
          }}
        >
          <img
            src={aboutimg2}
            alt="Company Vision"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              maxWidth: "400px", // limit image size
            }}
          />
        </Box>

        {/* Right Section (Text) */}
        <Box
          sx={{
            flex: 2,
            textAlign: { xs: "center", md: "left" },
            paddingLeft: { xs: 0, md: 3 },
          }}
        >
          <Typography variant="h5" gutterBottom>
            <b>Gold Medalist</b>
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", mx: 2 }}>
            Dr. Manish Soni, a distinguished gold medalist in dermatology, is
            widely recognized for her exceptional expertise in skin care. She
            earned her gold medal for outstanding academic performance in
            dermatology, showcasing her deep understanding of skin conditions,
            treatments, and innovations in the field. With a commitment to
            providing the highest level of care, Dr. [Name] focuses on both
            medical and cosmetic dermatology, helping patients achieve healthy,
            radiant skin. Her clinical skills are complemented by her passion
            for educating others and advancing dermatological science. Patients
            trust Dr. [Name] for her compassionate approach, attention to
            detail, and personalized treatment plans that address a wide range
            of skin concerns, from acne and aging to complex dermatological
            disorders.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

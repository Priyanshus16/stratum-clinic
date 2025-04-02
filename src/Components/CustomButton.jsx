import React from "react";
import { Button } from "@mui/material";

const CustomButton = () => {
  return (
    <Button
      sx={{
        backgroundColor: "#1976d2", // Blue color
        color: "white",
        borderRadius: "20px", // Rounded corners
        padding: "10px 20px",
        transition: "all 0.3s ease", // Smooth effect
        "&:hover": {
          backgroundColor: "#1565c0", // Darker blue on hover
          transform: "scale(1.05)", // Slight zoom effect
        },
      }}
    >

    </Button>
  );
};

export default CustomButton;

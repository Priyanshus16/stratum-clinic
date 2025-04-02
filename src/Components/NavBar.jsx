import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import navimage from "../assets/nav-logo.png";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact Us", path: "/contact" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#e3f2fd" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color="primary">
            <img
              src={navimage}
             
              alt="Logo"
              onClick={() => navigate("/")}
              style={{
                cursor:"pointer",
                width: "150px",
                height: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: "bold",
                  color: "#1a1a1a",
                  mx: 1,
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#081d3a",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        <List sx={{ width: 250, backgroundColor: "#e3f2fd", height: "100%" }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  "&:hover": { backgroundColor: "#081d3a", transition: "0.3s" },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{ fontWeight: "bold", color: "#1a1a1a" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;

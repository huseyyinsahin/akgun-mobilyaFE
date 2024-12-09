import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        height: "6rem",
        display: "flex",
        justifyContent: "center",
        color: "black",
        backgroundColor: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "space-around" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h1"
            sx={{ fontFamily: "Lobster", fontSize: { xs: "1.8rem", md: "3.5rem" } }}
          >
            AKGÜN
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Lobster",
              fontSize: { xs: "0.6rem", md: "1.2rem" },
            }}
          >
            Mobilya & Dekorasyon
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "0.4rem", md: "2rem" },
            fontSize: { xs: "0.6rem", md: "1.1rem" },
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/about"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Hakkımızda
          </NavLink>
          <NavLink
            to="/photogallery"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Galeri
          </NavLink>
          <NavLink
            to="/myprojects"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Projelerimiz
          </NavLink>
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            İletişim
          </NavLink>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <>
      <Box sx={{ height: "6.1rem" }}></Box>

      <AppBar
        position="fixed"
        sx={{
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
              onClick={() => navigate("/")}
              variant="h1"
              component="h1"
              sx={{
                cursor: "pointer",
                fontFamily: "Lobster",
                fontSize: { xs: "2.8rem", md: "3.5rem" },
              }}
            >
              AKGÜN
            </Typography>
            <Typography
              onClick={() => navigate("/")}
              variant="h1"
              sx={{
                fontFamily: "Lobster",
                fontSize: { xs: "01rem", md: "1.2rem" },
                cursor: "pointer",
              }}
            >
              Mobilya & Dekorasyon
            </Typography>
          </Box>

          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>

          <Drawer anchor="top" open={open} onClose={() => toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                gap: "1rem",
                marginLeft: "1.5rem",
                fontSize: "1.6rem",
                position: "relative",
              }}
            >
              <CloseIcon
                onClick={() => toggleDrawer(false)}
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "-40px",
                  border: "2px solid black",
                  borderRadius: "10px",
                  cursor: "pointer",
                  color: "black",
                }}
              />
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                onClick={() => toggleDrawer(false)}
              >
                Anasayfa
              </NavLink>
              <NavLink
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                onClick={() => toggleDrawer(false)}
              >
                Hakkımızda
              </NavLink>
              <NavLink
                to="/photogallery"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                onClick={() => toggleDrawer(false)}
              >
                Galeri
              </NavLink>
              <NavLink
                to="/myprojects"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                onClick={() => toggleDrawer(false)}
              >
                Projelerimiz
              </NavLink>
              <NavLink
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                onClick={() => toggleDrawer(false)}
              >
                İletişim
              </NavLink>
            </Box>
          </Drawer>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "2rem",
              fontSize: "1.1rem",
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
    </>
  );
};

export default Navbar;

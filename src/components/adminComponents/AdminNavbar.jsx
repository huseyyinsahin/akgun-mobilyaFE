import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import useAuthRequest from "../../hooks/useAuthRequest";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const { logout } = useAuthRequest();
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ height: "6.2rem" }}></Box>

      <AppBar
        sx={{
          height: "6.2rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              color: "white",
              backgroundColor: "rgb(0, 128, 255)",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "lightGray", color: "gray" },
            }}
          >
            Siteye Dön
          </Button>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              color: "white",
              backgroundColor: "rgb(0, 128, 255)",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "lightGray", color: "gray" },
            }}
          >
            Geri Dön
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            variant="h2"
            sx={{
              cursor: "default",
              fontFamily: "Lobster",
              fontSize: { xs: "2.4rem", md: "3.0rem" },
            }}
          >
            AKGÜN
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontFamily: "Lobster",
              fontSize: { xs: "0.9rem", md: "1rem" },
              cursor: "default",
            }}
          >
            Mobilya & Dekorasyon
          </Typography>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              fontSize: { xs: "0.8rem", md: "1rem" },
              cursor: "default",
              letterSpacing: { xs: "5px", md: "10px" },
            }}
          >
            ADMİN PANELİ
          </Typography>
        </Box>
        <Button
          onClick={logout}
          sx={{
            color: "white",
            backgroundColor: "rgb(0, 128, 255)",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "lightGray", color: "gray" },
          }}
        >
          Çıkış Yap
        </Button>
      </AppBar>
    </>
  );
};

export default AdminNavbar;

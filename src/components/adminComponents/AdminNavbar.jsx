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
          background:
            "linear-gradient(90deg,rgb(146, 113, 65),rgb(205, 181, 145),rgb(146, 113, 65))",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Button
            onClick={() => navigate("/")}
            sx={{
              color: "white",
              background: "linear-gradient(145deg, #7E643C, #A8906C, #D7C4A5)",
              textTransform: "capitalize",
              "&:hover": {
                background:
                  "linear-gradient(145deg, #D7C4A5, #A8906C, #7E643C)",
              },
            }}
          >
            Siteye Dön
          </Button>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              color: "white",
              background: "linear-gradient(145deg, #7E643C, #A8906C, #D7C4A5)",
              textTransform: "capitalize",
              "&:hover": {
                background:
                  "linear-gradient(145deg, #D7C4A5, #A8906C, #7E643C)",
              },
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
            background: "linear-gradient(145deg, #7E643C, #A8906C, #D7C4A5)",
            textTransform: "capitalize",
            "&:hover": {
              background: "linear-gradient(145deg, #D7C4A5, #A8906C, #7E643C)",
            },
          }}
        >
          Çıkış Yap
        </Button>
      </AppBar>
    </>
  );
};

export default AdminNavbar;

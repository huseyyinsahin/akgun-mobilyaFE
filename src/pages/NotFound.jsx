import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          borderRadius: 5,
          padding: 5,
          textAlign: "center",
          boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.8)",
          transform: "scale(1.1)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#2C2C2C",
            marginBottom: 2,
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: "#2C2C2C",
            marginBottom: 4,
            letterSpacing: "0.2em",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          Ooops! Sayfa Bulunamadı
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#2C2C2C",
            marginBottom: 3,
            fontSize: "1.3rem",
            fontStyle: "italic",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
          }}
        >
          Aradığınız sayfa çok uzaklarda... Ama merak etmeyin, hemen geri
          dönelim!
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#2C2C2C",
            color: "#fff",
            padding: "14px 36px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            borderRadius: "50px",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#1C1C1C",
              transform: "scale(1.05)",
            },
            transition: "all 0.3s ease-in-out",
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <ArrowBack sx={{ marginRight: "8px" }} />
          Ana Sayfaya Dön
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;

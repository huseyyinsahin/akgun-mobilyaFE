import { Box, Typography, Grid2 } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "1rem", md: "1rem 4rem", xl: "0rem 6rem" },
      }}
    >
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            onClick={() => navigate("/adminslider")}
            sx={{
              cursor: "pointer",
              border: "3px solid #1976D2",
              borderRadius: "12px",
              height: { xs: "14rem", xl: "20rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3F2FD",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#BBDEFB",
                transform: "scale(1.05) translateY(-10px)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1976D2",
                marginBottom: "0.5rem",
              }}
            >
              Anasayfa - Slider
            </Typography>
            <Typography variant="body2" sx={{ color: "#0D47A1" }}>
              Slider içeriğini düzenleyin ve zenginleştirin.
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            onClick={() => navigate("/adminhomecard")}
            sx={{
              cursor: "pointer",
              border: "3px solid #1976D2",
              borderRadius: "12px",
              height: { xs: "14rem", xl: "20rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3F2FD",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#BBDEFB",
                transform: "scale(1.05) translateY(-10px)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1976D2",
                marginBottom: "0.5rem",
              }}
            >
              Anasayfa - Bilgi Kartları
            </Typography>
            <Typography variant="body2" sx={{ color: "#0D47A1" }}>
              Bilgi kartlarını kolayca yönetin.
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            onClick={() => navigate("/adminreference")}
            sx={{
              cursor: "pointer",
              border: "3px solid #1976D2",
              borderRadius: "12px",
              height: { xs: "14rem", xl: "20rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3F2FD",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#BBDEFB",
                transform: "scale(1.05) translateY(-10px)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1976D2",
                marginBottom: "0.5rem",
              }}
            >
              Anasayfa - Referanslar
            </Typography>
            <Typography variant="body2" sx={{ color: "#0D47A1" }}>
              Referanslarınızı detaylıca görüntüleyin ve düzenleyin.
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            onClick={() => navigate("/adminabout")}
            sx={{
              cursor: "pointer",
              border: "3px solid #1976D2",
              borderRadius: "12px",
              height: { xs: "14rem", xl: "20rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3F2FD",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#BBDEFB",
                transform: "scale(1.05) translateY(-10px)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1976D2",
                marginBottom: "0.5rem",
              }}
            >
              Hakkımızda
            </Typography>
            <Typography variant="body2" sx={{ color: "#0D47A1" }}>
              Şirket bilgilerini burada yönetin.
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            onClick={() => navigate("/adminphotogallery")}
            sx={{
              cursor: "pointer",
              border: "3px solid #1976D2",
              borderRadius: "12px",
              height: { xs: "14rem", xl: "20rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3F2FD",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#BBDEFB",
                transform: "scale(1.05) translateY(-10px)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1976D2",
                marginBottom: "0.5rem",
              }}
            >
              Galeri
            </Typography>
            <Typography variant="body2" sx={{ color: "#0D47A1" }}>
              Görsellerinizi buradan yönetin.
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            onClick={() => navigate("/adminmyprojects")}
            sx={{
              cursor: "pointer",
              border: "3px solid #1976D2",
              borderRadius: "12px",
              height: { xs: "14rem", xl: "20rem" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E3F2FD",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#BBDEFB",
                transform: "scale(1.05) translateY(-10px)",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1976D2",
                marginBottom: "0.5rem",
              }}
            >
              Projeler
            </Typography>
            <Typography variant="body2" sx={{ color: "#0D47A1" }}>
              Projelerinizi kolayca düzenleyin.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AdminHome;

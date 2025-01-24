import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import WorkIcon from "@mui/icons-material/Work";

const AdminHome = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Anasayfa - Slider",
      description: "Slider içeriğini düzenleyin ve zenginleştirin.",
      icon: <HomeIcon sx={{ fontSize: "4.5rem", color: "white" }} />,
      link: "/adminslider",
    },
    {
      title: "Anasayfa - Bilgi Kartları",
      description: "Bilgi kartlarını kolayca yönetin.",
      icon: <CardGiftcardIcon sx={{ fontSize: "3.5rem", color: "white" }} />,
      link: "/adminhomecard",
    },
    {
      title: "Anasayfa - Referanslar",
      description: "Referanslarınızı görüntüleyin ve düzenleyin.",
      icon: <StarIcon sx={{ fontSize: "3.5rem", color: "white" }} />,
      link: "/adminreference",
    },
    {
      title: "Hakkımızda",
      description: "Şirket bilgilerini burada yönetin.",
      icon: <InfoIcon sx={{ fontSize: "3.5rem", color: "white" }} />,
      link: "/adminabout",
    },
    {
      title: "Galeri",
      description: "Görsellerinizi buradan yönetin.",
      icon: <PhotoLibraryIcon sx={{ fontSize: "3.5rem", color: "white" }} />,
      link: "/adminphotogallery",
    },
    {
      title: "Projeler",
      description: "Projelerinizi kolayca düzenleyin.",
      icon: <WorkIcon sx={{ fontSize: "3.5rem", color: "white" }} />,
      link: "/adminmyprojects",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "1rem", md: "2rem", xl: "8rem" },
      }}
    >
      <Grid container spacing={4}>
        {sections.map((section, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Box
              onClick={() => navigate(section.link)}
              sx={{
                cursor: "pointer",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                height: { xs: "13rem", xl: "22rem" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(145deg, #7E643C, #A8906C, #D7C4A5)",
                transition: "all 0.4s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05) translateY(-10px)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {section.icon}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#FFFFFF", 
                  marginBottom: "0.5rem",
                }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white", 
                }}
              >
                {section.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminHome;

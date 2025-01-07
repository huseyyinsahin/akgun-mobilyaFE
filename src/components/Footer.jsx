import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C2C2C",
        color: "white",
        pt: 4,
        pb: 2,
        px: 2,
        mt: 4,
      }}
    >
      <Grid container spacing={3} textAlign="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                fontFamily: "Lobster",
                fontSize: { xs: "2.4rem", md: "3.5rem" },
              }}
            >
              AKGÜN
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                fontFamily: "Lobster",
                fontSize: { xs: "0.9rem", md: "1.2rem" },
              }}
            >
              Mobilya & Dekorasyon
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Şıklık ve rahatlık getirmek için en kaliteli mobilyaları sunuyoruz.
            Bize ulaşın ve hayallerinizi bizimle birlikte gerçekleştirin.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography
            sx={{ fontSize: "2.2rem" }}
            variant="h2"
            component="h2"
            gutterBottom
          >
            İletişim
          </Typography>
          <Typography variant="body2">Telefon: +90 553 495 3794</Typography>
          <Typography variant="body2">
            E-posta: akgunmobilyaharun@gmail.com
          </Typography>
          <Typography variant="body2">
            Adres: Ataşehir İstanbul, Türkiye
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography
            sx={{ fontSize: "2.2rem" }}
            variant="h2"
            component="h2"
            gutterBottom
          >
            Sosyal Medyada Biz
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <IconButton
              href="https://instagram.com/akgunmobilyaist"
              target="_blank"
              sx={{ color: "#FFF" }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          pt: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography variant="body2" sx={{ margin: "auto" }}>
          © 2024 Akgün Mobilya & Dekorasyon
        </Typography>
        <Box
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/huseyyin-sahin"
          sx={{
            position: "absolute",
            fontSize: { xs: "0.8rem", md: "0.6rem" },
            padding: { xs: "3rem", md: "0rem" },
            color: "white",
          }}
        >
          Developed by Hüseyin Şahin
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

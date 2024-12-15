import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
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
            sx={{ fontFamily: "Lobster", fontSize: { xs: "2.4rem", md: "3.5rem" } }}
          >
            AKGÜN
          </Typography>
          <Typography
            variant="h5"
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
          <Typography sx={{fontSize:"1.8rem"}} variant="h6" gutterBottom>
            İletişim
          </Typography>
          <Typography variant="body2">Telefon: +90 555 555 55 55</Typography>
          <Typography variant="body2">
            E-posta: akgunmobilya@gmail.com
          </Typography>
          <Typography variant="body2">
            Adres: Ataşehir İstanbul, Türkiye
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography sx={{fontSize:"1.8rem"}} variant="h6" gutterBottom>
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
              href="https://instagram.com"
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
          textAlign: "center",
          mt: 4,
          pt: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography variant="body2">
          © 2024 Akgün Mobilya & Dekorasyon
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

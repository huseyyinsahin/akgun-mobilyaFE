import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          borderBottom: "2px solid #DADADA",
          padding: 4,
          color: "#2C2C2C",
        }}
      >
        İletişim
      </Typography>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
          <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Phone sx={{ fontSize: 60, color: "#2C2C2C" }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              Telefon
            </Typography>
            <Typography sx={{ color: "#555" }}>+90 553 495 3794</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
          <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
            <Email sx={{ fontSize: 60, color: "#2C2C2C" }} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              E-posta
            </Typography>
            <Typography sx={{ color: "#555" }}>
              akgunmobilyaharun@gmail.com
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper
        sx={{
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
          mt: 5,
        }}
      >
        <LocationOn sx={{ fontSize: 60, color: "#2C2C2C" }} />
        <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
          Adres
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "450px",
            mt: 5,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.4272523379956!2d29.16777710872028!3d40.98484705249903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf64203c1405%3A0x23f075212c5d7c0f!2sAkg%C3%BCn%20Mobilya!5e0!3m2!1str!2str!4v1734345683761!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
          ></iframe>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;

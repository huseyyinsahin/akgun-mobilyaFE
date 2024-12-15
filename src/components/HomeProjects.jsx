import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import photo1 from "../assests/images/photo1.jpg";
import photo2 from "../assests/images/photo2.jpg";
const HomeProjects = () => {
  const projects = [
    {
      image: photo1,
      title: "Canpark Kahve Dünyası",
    },
    {
      image: photo1,
      title: "Meydan AVM Kahve Dünyası",
    },
    {
      image: photo2,
      title: "Canpark Kahve Dünyası",
    },
    {
      image: photo1,
      title: "Canpark Kahve Dünyası",
    },
    {
      image: photo1,
      title: "Canpark Kahve Dünyası",
    },
    {
      image: photo2,
      title: "Canpark Kahve Dünyası",
    },
  ];
  return (
    <Container sx={{padding: { xs: "0rem 1rem 2rem 1rem", md: "0 0 5rem 0" }}} >
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: "1.3rem",
          fontSize: { xs: "2rem", md: "5rem" },
        }}
      >
       Güncel Projelerimiz
      </Typography>
      <Grid container spacing={2}>
        {projects.map((proje) => (
          <Grid key={proje.title} item xs={12} md={6} sx={{ position: "relative" }}>
            <Box
              component="img"
              src={proje.image}
              alt="Example Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: 3,
                objectFit: "cover",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: "rgba(172, 172, 172, 0.4)",
                color: "white",
                textAlign: "center",
                fontSize: { xs: "0.8rem ", md: "1.3rem" },
                borderRadius: "1rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              p={2}
            >
              {proje.title}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProjects;

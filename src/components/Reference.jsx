import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Reference = () => {
  const reference = [
    "Kahve Dünyası",
    "Kahve Dünyası",
    "Kahve Dünyası",
    "Kahve Dünyası",
    "Kahve Dünyası",
    "Kahve Dünyası",
  ];
  return (
    <Container sx={{ padding: { xs: "2rem 4rem", md: "5rem 0rem" } }}>
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: "1.3rem",
          fontSize: { xs: "2rem", md: "5rem" },
        }}
      >
        Referanslarımız
      </Typography>
      <Grid container spacing={2}>
        {reference.map((ref) => (
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#66785F",
                color: "white",
                textAlign: "center",
                fontSize: { xs: "0.8rem ", md: "1.3rem" },
                borderRadius: "1rem",
              }}
              p={2}
            >
              {ref}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reference;

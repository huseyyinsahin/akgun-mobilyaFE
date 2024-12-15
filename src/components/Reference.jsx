import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Reference = () => {
  const reference = [
    "Kahve Dünyası",
    "Starbucks",
    "Kahve Dünyası",
    "Starbucks",
    "Kahve Dünyası",
    "Starbucks",
    "Kahve Dünyası",
    "Starbucks",
    "Starbucks",
    "Starbucks",
  ];

  return (
    <Container sx={{ padding: { xs: "2rem 1rem", md: "5rem 0rem" } }}>
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: "1.3rem",
          fontSize: { xs: "2rem", md: "4rem" },
        }}
      >
        Referanslarımız
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            animation: "scroll 12s linear infinite",
          }}
        >
          {reference.map((ref, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#66785F",
                color: "white",
                textAlign: "center",
                fontSize: { xs: "0.8rem ", md: "1.3rem" },
                borderRadius: "1rem",
                padding: "1rem",
                margin: "0 1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              {ref}
            </Box>
          ))}
        </Box>
      </Box>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Container>
  );
};

export default Reference;

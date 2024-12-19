import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Reference = () => {
  const data = [
    { ref: "Kahve Dünyası" },
    { ref: "Starbucks" },
    { ref: "Kahve Dünyası" },
    { ref: "Starbucks" },
    { ref: "Kahve Dünyası" },
    { ref: "Starbucks" },
    { ref: "Kahve Dünyası" },
    { ref: "Starbucks" },
    { ref: "Starbucks" },
  ];

  return (
    <Box sx={{ padding: { xs: "2rem 1rem", md: "5rem 0rem" } }}>
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
            "@keyframes scroll": {
              "0%": {
                transform: "translateX(100%)",
              },
              "100%": {
                transform: "translateX(-100%)",
              },
            },
          }}
        >
          {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#2C2C2C",
                color: "white",
                textAlign: "center",
                fontSize: { xs: "0.8rem ", md: "1.3rem" },
                borderRadius: "0.3rem",
                padding: "1rem",
                margin: "0 1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              {item.ref}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Reference;

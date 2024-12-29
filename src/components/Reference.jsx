import React, { useEffect } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import useReferenceRequest from "../hooks/useReferenceRequest";
import { useSelector } from "react-redux";

const Reference = () => {
  const { getReference } = useReferenceRequest();

  useEffect(() => {
    getReference();
  }, []);

  const { reference: ref, loading, error } = useSelector((state) => state.data);
  console.log(ref);
  return (
    <>
      {error && (
        <Alert severity="error" sx={{ width: "80%", margin: "auto" }}>
          Bu bilgiler yüklenemedi, şuanda bir hata var sayfayı yenileyiniz!
        </Alert>
      )}
      {loading ? (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <CircularProgress color="inherit" size={100} />
        </Container>
      ) : (
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
                    transform: "translateX(150%)",
                  },
                  "100%": {
                    transform: "translateX(-110%)",
                  },
                },
              }}
            >
              {ref.map((item) => (
                <Box
                  key={item._id}
                  sx={{
                    backgroundColor: "#2C2C2C",
                    color: "white",
                    textAlign: "center",
                    fontSize: { xs: "1rem ", md: "1.3rem" },
                    borderRadius: "0.3rem",
                    padding: "1rem",
                    margin: "0 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.reference}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Reference;

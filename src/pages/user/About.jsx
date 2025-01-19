import React, { useEffect } from "react";
import {
  Typography,
  Divider,
  Box,
  Container,
  Alert,
  Skeleton,
} from "@mui/material";
import useAboutRequest from "../../hooks/useAboutRequest";
import { useSelector } from "react-redux";

const About = () => {
  const { getAbout } = useAboutRequest();

  useEffect(() => {
    getAbout();
  }, []);

  const { about, error, loading } = useSelector((state) => state.data);

  return (
    <>
      {!loading && error && (
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
            height: { md: "100vh", xl: "60vh" },
            marginTop: "20px",
          }}
        >
          <Skeleton variant="rectangular" width={1600} height={600} />
        </Container>
      ) : (
        !error && (
          <Box
            sx={{
              minHeight: { xl: "80vh" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.4rem",
            }}
          >
            <Container
              sx={{
                padding: "2rem",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                borderRadius: "15px",
                marginTop: "2rem",
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "1rem",
                  color: "#2C2C2C",
                }}
              >
                Hakkımızda
              </Typography>
              <Divider
                sx={{
                  marginBottom: "1.5rem",
                  backgroundColor: "#2a3eb1",
                }}
              />
              <Box sx={{ lineHeight: 1.8, textAlign: "justify" }}>
                {about.map((item) => (
                  <Box key={item._id}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.1rem",
                        color: "#555",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {item.text}
                    </Typography>
                    <br />
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        )
      )}
    </>
  );
};

export default About;

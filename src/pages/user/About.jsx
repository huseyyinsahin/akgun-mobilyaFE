import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  Divider,
  Box,
  Container,
  Alert,
  CircularProgress,
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
            height: { md: "100vh", xl: "60vh" },
            marginTop: "20px",
          }}
        >
          <Skeleton variant="rectangular" width={1600} height={600} />
        </Container>
      ) : (
        <Container
          style={{
            padding: "2rem",
            margin: "auto",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
            marginTop: "2rem",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "1rem",
              color: "#2C2C2C",
            }}
          >
            Hakkımızda
          </Typography>
          <Divider
            style={{ marginBottom: "1.5rem", backgroundColor: "#2a3eb1" }}
          />
          <Box style={{ lineHeight: 1.8, textAlign: "justify" }}>
            {about.map((item) => (
              <Box key={item.text}>
                <Typography
                  variant="h6"
                  style={{
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
      )}
    </>
  );
};

export default About;
//* eski hali contacttan önceki home commitinde duruyor

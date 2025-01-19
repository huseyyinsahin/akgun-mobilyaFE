import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProjectsRequest from "../hooks/useProjectsRequest";
import { useSelector } from "react-redux";
const HomeProjects = () => {
  const navigate = useNavigate();

  const { getProjects } = useProjectsRequest();

  useEffect(() => {
    getProjects();
  }, []);

  const { error, loading, projects } = useSelector((state) => state.data);

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
            height: "80vh",
          }}
        >
          <CircularProgress color="inherit" size={150} />
        </Container>
      ) : (
        !error && (
          <Container
            sx={{ padding: { xs: "0rem 1rem 2rem 1rem", md: " 0rem" } }}
          >
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
              {projects.slice(0, 6)?.map((proje) => (
                <Grid
                  key={proje._id}
                  item
                  xs={12}
                  sm={6}
                  sx={{ position: "relative", cursor: "pointer" }}
                  onClick={() => navigate(`myprojects/${proje._id}`)}
                >
                  <Box
                    component="img"
                    src={`${process.env.REACT_APP_BASE_URL}/${proje.image[0]}`}
                    alt={proje.title}
                    sx={{
                      width: "100%",
                      height: { xs: "13rem", md: "17rem" },
                      borderRadius: "8px",
                      objectFit: "cover",
                      backgroundSize: "cover",
                    }}
                  />
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
                      textShadow: "3px 4px 3px black",
                    }}
                    p={2}
                  >
                    {proje.title.length > 40
                      ? ` ${proje.title.slice(0, 40)}...`
                      : proje.title}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        )
      )}
    </>
  );
};

export default HomeProjects;

import {
  Box,
  Container,
  Typography,
  Grid,
  Dialog,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useProjectsRequest from "../../hooks/useProjectsRequest";
import { useSelector } from "react-redux";

const MyProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  /* ---------------------------------- */
  const { readProjects } = useProjectsRequest();

  useEffect(() => {
    readProjects(id);
  }, [id]);

  const { error, loading, projectDetails } = useSelector((state) => state.data);

  /* ---------------------------------- */

  //* fotografa tıklandığında tam ekran gözüksün diye
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  //* ------------------------------------------
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
          <Container sx={{ mt: 4, minHeight: { xl: "80vh" } }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              textAlign="center"
              sx={{ fontWeight: "bold" }}
            >
              {projectDetails.title}
            </Typography>

            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={
                  projectDetails?.image &&
                  `${process.env.REACT_APP_BASE_URL}/${projectDetails?.image[0]}`
                }
                alt={projectDetails.title}
                sx={{
                  width: "100%",
                  height: { xs: "15rem", md: "30rem" },
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 3,
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(projectDetails?.image[0])}
              />
              <Box
                onClick={() => navigate(-1)}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: { xs: "4px 8px", md: "8px 16px" },
                  color: "white",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: "#2C2C2C",
                  ":hover": {
                    backgroundColor: "rgb(0, 0, 0)",
                    transform: "scale(1.05)",
                  },
                  ":active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                <ArrowBackIcon sx={{ marginRight: "8px" }} />
                Geri
              </Box>
            </Box>
            <Typography variant="body1">{projectDetails.text}</Typography>
            <Typography
              variant="h6"
              component="h4"
              sx={{ color: "gray", textAlign: "right", mt: 2 }}
            >
              {projectDetails.createdAt?.split("T")[0]}
            </Typography>

            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              Ek Resimler
            </Typography>

            <Grid container spacing={2}>
              {projectDetails?.image?.slice(1).map((img, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Box
                    component="img"
                    src={`${process.env.REACT_APP_BASE_URL}/${img}`}
                    alt={projectDetails.title}
                    sx={{
                      width: "100%",
                      height: "11rem",
                      objectFit: "cover",
                      borderRadius: 2,
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(img)}
                  />
                </Grid>
              ))}
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="lg">
              <>
                <Box
                  component="img"
                  src={`${process.env.REACT_APP_BASE_URL}/${selectedImage}`}
                  alt={projectDetails.title}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    position: "relative",
                  }}
                />
                <CloseIcon
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    border: "2px solid gray",
                    borderRadius: "10px",
                    cursor: "pointer",
                    color: "white",
                  }}
                />
              </>
            </Dialog>
          </Container>
        )
      )}
    </>
  );
};

export default MyProjectsDetail;

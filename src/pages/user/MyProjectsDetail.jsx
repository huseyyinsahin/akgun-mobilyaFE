import { Box, Container, Typography, Grid, Dialog } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import photo1 from "../../assests/images/photo1.jpg";
import photo2 from "../../assests/images/photo2.jpg";
import photo3 from "../../assests/images/photo3.jpg";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MyProjectsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const data = [
    {
      title: "Kahve Dünyası Trabzon",
      image: [photo1, photo2, photo3],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero voluptatem expedita dicta alias architecto libero, fugit, quisquam doloremque maiores, doloribus vitae consequatur illo dolores voluptatum esse laboriosam. Eum blanditiis corporis cumque corrupti dolores consectetur unde deserunt, nisi aliquid, molestias accusamus aperiam illo voluptatem odit quaerat! Modi repellat tempore aliquam, eaque blanditiis laborum omnis excepturi harum atque delectus accusamus laboriosam saepe commodi dolore quidem, molestiae sit vel, exercitationem possimus dignissimos ipsa maxime. Architecto vitae rerum quo obcaecati eveniet vero velit voluptas doloribus sint hic, est laborum minima, odit consectetur, et neque sapiente. Fugit ipsum suscipit consectetur necessitatibus enim blanditiis ratione, dolore ducimus temporibus? Modi sequi explicabo labore nostrum. Eum quos, ducimus illum veniam enim perferendis minima animi aperiam earum quis accusantium provident maxime doloremque maiores iusto aliquam? Velit sed adipisci consequatur, consequuntur voluptas quis repellendus placeat doloribus, quidem nulla, porro labore asperiores sint. Ducimus doloribus, dicta sequi consectetur in reiciendis?",
      createdAt: "20.12.2024",
    },
  ];

  const project = data[0];

  return (
    <Container sx={{ mt: 4, position: "relative" }}>
      <Box
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: { xs: "95px", md: "10px" },
          left: { xs: "17px", md: "25px" },
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

      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        {project.title}
      </Typography>

      <Box
        component="img"
        src={project.image[0]}
        alt={project.title}
        sx={{
          width: "100%",
          height: { xs: "15rem", md: "30rem" },
          objectFit: "cover",
          borderRadius: 2,
          mb: 3,
          cursor: "pointer",
        }}
        onClick={() => handleImageClick(project.image[0])}
      />

      <Typography variant="body1">{project.description}</Typography>
      <Typography
        variant="h6"
        component="h4"
        sx={{ color: "gray", textAlign: "right", mt: 2 }}
      >
        {project.createdAt}
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
        {project.image.slice(1).map((img, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box
              component="img"
              src={img}
              alt={project.image}
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
            src={selectedImage}
            alt="Mobilya"
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
  );
};

export default MyProjectsDetail;

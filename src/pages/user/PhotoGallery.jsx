import {
  Box,
  Card,
  Container,
  Dialog,
  Divider,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import photo1 from "../../assests/images/photo1.jpg";
import photo2 from "../../assests/images/photo2.jpg";
import photo3 from "../../assests/images/photo3.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";

const PhotoGallery = () => {
  const [imagesCount, setImagesCount] = useState(0);

  const handleCount = (num) => {
    if (imagesCount + num < 0) {
      num = mockData.length - 1;
    }
    setImagesCount((prevCount) => (prevCount + num) % mockData.length);
  };

  const handlePhoto = (num) => {
    setImagesCount(num);
  };

  const mockData = [
    { image: photo1 },
    { image: photo3 },
    { image: photo1 },
    { image: photo2 },
    { image: photo3 },
    { image: photo2 },
    { image: photo3 },
    { image: photo2 },
    { image: photo1 },
    { image: photo2 },
    { image: photo2 },
    { image: photo2 },
    { image: photo2 },
    { image: photo2 },
    { image: photo2 },
    { image: photo2 },
  ];

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

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "20rem", md: "30rem" },
          width: { xs: "100%", md: "80rem" },
          margin: "auto",
          overflow: "hidden",
          marginTop: "0.5rem",
        }}
      >
        <Box>
          <Box
            component="img"
            src={mockData[imagesCount].image}
            onClick={() => handleImageClick(mockData[imagesCount].image)}
            alt="Mobilya"
            sx={{
              width: "100%",
              height: { xs: "20rem", md: "30rem" },
              objectFit: "contain",
              backgroundSize: "cover",
              cursor: "pointer",
            }}
          />
        </Box>
        <ChevronLeftIcon
          onClick={() => handleCount(-1)}
          sx={{
            fontSize: "3rem",
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            color: "black",
            cursor: "pointer",
          }}
        />

        <ChevronRightIcon
          onClick={() => handleCount(1)}
          sx={{
            fontSize: "3rem",
            position: "absolute",
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
            color: "",
            cursor: "pointer",
          }}
        />
      </Box>
      <Divider sx={{ marginTop: "1rem" }} />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "space-around", md: "flex-start" },
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        {mockData.map((item, index) => (
          <Box
            key={item.image}
            sx={{
              cursor: "pointer",
              borderBottom: imagesCount === index ? "2px solid black" : "none",
            }}
          >
            <img
              onClick={() => handlePhoto(index)}
              width="150px"
              height="100px"
              src={item.image}
              alt="Mobilya"
            />
          </Box>
        ))}
      </Container>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}
        count={10}
        variant="outlined"
      />
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
              color:"white"
            }}
          />
        </>
      </Dialog>
    </>
  );
};

export default PhotoGallery;

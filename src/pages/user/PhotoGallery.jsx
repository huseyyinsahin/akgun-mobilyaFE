import { Box, Card, Container, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import photo1 from "../../assests/images/photo1.jpg";
import photo2 from "../../assests/images/photo2.jpg";
import photo3 from "../../assests/images/photo3.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "20rem", md: "30rem" },
          width: "100%",
          overflow: "hidden",
          marginTop: "0.5rem",
        }}
      >
        <Box>
          <Box
            component="img"
            src={mockData[imagesCount].image}
            alt="Example Image"
            sx={{
              width: "100%",
              height: { xs: "20rem", md: "30rem" },
              boxShadow: 3,
              objectFit: "contain" ,
              backgroundSize: "cover",
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
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
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
    </>
  );
};

export default PhotoGallery;

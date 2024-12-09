import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import photo1 from "../assests/images/photo1.jpg";
import photo2 from "../assests/images/photo2.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Carousel = () => {

    const images = [photo1, photo2];

  const [imagesCount, setImagesCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagesCount((prevCount) => (prevCount + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCount = (num) => {
    if (imagesCount + num < 0) {
      num = images.length - 1;
    }
    setImagesCount((prevCount) => (prevCount + num) % images.length);
  };
  return (
    <Box
    sx={{
      position: "relative",
      height: { xs: "15rem", md: "30rem" },
      width: "100%",
      overflow: "hidden",
    }}
  >
    <Typography component="a" href="">
      <Box
        component="img"
        src={images[imagesCount]}
        alt="Example Image"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: 3,
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      />
    </Typography>
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
  )
}

export default Carousel
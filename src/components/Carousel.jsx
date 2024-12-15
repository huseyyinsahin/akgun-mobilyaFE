import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import photo1 from "../assests/images/photo1.jpg";
import photo2 from "../assests/images/photo2.jpg";
import photo3 from "../assests/images/photo3.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Carousel = () => {
  const mockData = [{ image: photo1 }, { image: photo2 }, { image: photo3 }];

  const [imagesCount, setImagesCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagesCount((prevCount) => (prevCount + 1) % mockData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCount = (num) => {
    if (imagesCount + num < 0) {
      num = mockData.length - 1;
    }
    setImagesCount((prevCount) => (prevCount + num) % mockData.length);
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "15rem", md: "35rem" },
        width: { xs: "100%", md: "65rem" },
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <Box>
        <Box
          component="img"
          src={mockData[imagesCount].image}
          alt="Example Image"
          sx={{
            width: "100%",
            height: "auto",
            boxShadow: 3,
            objectFit: "cover",
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
  );
};

export default Carousel;

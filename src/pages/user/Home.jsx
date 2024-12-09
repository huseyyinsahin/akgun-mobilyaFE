import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import photo1 from "../../assests/images/photo1.jpg";
import photo2 from "../../assests/images/photo2.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Carousel from "../../components/Carousel";
import Reference from "../../components/Reference";

const Home = () => {
  return (
    <>
      <Carousel />
      <Reference />
    </>
  );
};

export default Home;

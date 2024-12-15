import React from "react";
import Carousel from "../../components/Carousel";
import Reference from "../../components/Reference";
import HomeProjects from "../../components/HomeProjects";
import HomeCards from "../../components/HomeCards";

const Home = () => {
  return (
    <>
      <Carousel />
      <HomeCards />
      <HomeProjects />
      <Reference />
    </>
  );
};

export default Home;

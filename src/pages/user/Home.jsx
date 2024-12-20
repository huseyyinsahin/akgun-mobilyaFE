import React from "react";
import Reference from "../../components/Reference";
import HomeProjects from "../../components/HomeProjects";
import HomeCards from "../../components/HomeCards";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <HomeCards />
      <HomeProjects />
      <Reference />
    </>
  );
};

export default Home;

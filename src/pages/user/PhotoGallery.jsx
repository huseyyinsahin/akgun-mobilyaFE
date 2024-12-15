import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import photo1 from "../../assests/images/photo1.jpg";
import photo2 from "../../assests/images/photo2.jpg";

const PhotoGallery = () => {
  const mockData = [
    { title: "Living Room Furniture", image: photo1 },
    { title: "Bedroom Sets", image: photo2 },
    { title: "Office Desks", image: photo1 },
    { title: "Dining Tables", image: photo2 },
    { title: "Outdoor Furniture", image: photo1 },
    { title: "Storage Solutions", image: photo2 },
    { title: "Kitchen Cabinets", image: photo1 },
    { title: "Bathroom Vanities", image: photo2 },
    { title: "Kids Furniture", image: photo1 },
    { title: "Luxury Sofas", image: photo2 },
  ];

  return (
    <>
    <Typography variant="h2" sx={{margin:"auto",marginTop:"2rem"}}>Galeri</Typography>
    <Container sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"2rem"}}>
      
      {mockData.map((item) => (
        <Card >
          <img width="350px" src={item.image} alt="" />
          <Typography>{item.title}</Typography>
        </Card>
      ))}
    </Container>
    </>
  );
};

export default PhotoGallery;

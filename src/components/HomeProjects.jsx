import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import photo1 from "../assests/images/photo1.jpg";
import photo2 from "../assests/images/photo2.jpg";
import photo3 from "../assests/images/photo3.jpg";
import { useNavigate } from "react-router-dom";
const HomeProjects = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Kahve Dünyası Trabzon",
      image: [photo1, photo2, photo3],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero voluptatem expedita dicta alias architecto libero, fugit, quisquam doloremque maiores, doloribus vitae consequatur illo dolores voluptatum esse laboriosam. Eum blanditiis corporis cumque corrupti dolores consectetur unde deserunt, nisi aliquid, molestias accusamus aperiam illo voluptatem odit quaerat! Modi repellat tempore aliquam, eaque blanditiis laborum omnis excepturi harum atque delectus accusamus laboriosam saepe commodi dolore quidem, molestiae sit vel, exercitationem possimus dignissimos ipsa maxime. Architecto vitae rerum quo obcaecati eveniet vero velit voluptas doloribus sint hic, est laborum minima, odit consectetur, et neque sapiente. Fugit ipsum suscipit consectetur necessitatibus enim blanditiis ratione, dolore ducimus temporibus? Modi sequi explicabo labore nostrum. Eum quos, ducimus illum veniam enim perferendis minima animi aperiam earum quis accusantium provident maxime doloremque maiores iusto aliquam? Velit sed adipisci consequatur, consequuntur voluptas quis repellendus placeat doloribus, quidem nulla, porro labore asperiores sint. Ducimus doloribus, dicta sequi consectetur in reiciendis?",
    },
    {
      title: "Kahve Dünyası Mersin",
      image: [photo1, photo2, photo3],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero voluptatem expedita dicta alias architecto libero, fugit, quisquam doloremque maiores, doloribus vitae consequatur illo dolores voluptatum esse laboriosam. Eum blanditiis corporis cumque corrupti dolores consectetur unde deserunt, nisi aliquid, molestias accusamus aperiam illo voluptatem odit quaerat! Modi repellat tempore aliquam, eaque blanditiis laborum omnis excepturi harum atque delectus accusamus laboriosam saepe commodi dolore quidem, molestiae sit vel, exercitationem possimus dignissimos ipsa maxime. Architecto vitae rerum quo obcaecati eveniet vero velit voluptas doloribus sint hic, est laborum minima, odit consectetur, et neque sapiente. Fugit ipsum suscipit consectetur necessitatibus enim blanditiis ratione, dolore ducimus temporibus? Modi sequi explicabo labore nostrum. Eum quos, ducimus illum veniam enim perferendis minima animi aperiam earum quis accusantium provident maxime doloremque maiores iusto aliquam? Velit sed adipisci consequatur, consequuntur voluptas quis repellendus placeat doloribus, quidem nulla, porro labore asperiores sint. Ducimus doloribus, dicta sequi consectetur in reiciendis?",
    },
    {
      title: "Kahve Dünyası İstanbul",
      image: [photo2, photo1, photo3],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero voluptatem expedita dicta alias architecto libero, fugit, quisquam doloremque maiores, doloribus vitae consequatur illo dolores voluptatum esse laboriosam. Eum blanditiis corporis cumque corrupti dolores consectetur unde deserunt, nisi aliquid, molestias accusamus aperiam illo voluptatem odit quaerat! Modi repellat tempore aliquam, eaque blanditiis laborum omnis excepturi harum atque delectus accusamus laboriosam saepe commodi dolore quidem, molestiae sit vel, exercitationem possimus dignissimos ipsa maxime. Architecto vitae rerum quo obcaecati eveniet vero velit voluptas doloribus sint hic, est laborum minima, odit consectetur, et neque sapiente. Fugit ipsum suscipit consectetur necessitatibus enim blanditiis ratione, dolore ducimus temporibus? Modi sequi explicabo labore nostrum. Eum quos, ducimus illum veniam enim perferendis minima animi aperiam earum quis accusantium provident maxime doloremque maiores iusto aliquam? Velit sed adipisci consequatur, consequuntur voluptas quis repellendus placeat doloribus, quidem nulla, porro labore asperiores sint. Ducimus doloribus, dicta sequi consectetur in reiciendis?",
    },
    {
      title: "Kahve Dünyası Ankara",
      image: [photo3, photo2, photo1],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero voluptatem expedita dicta alias architecto libero, fugit, quisquam doloremque maiores, doloribus vitae consequatur illo dolores voluptatum esse laboriosam. Eum blanditiis corporis cumque corrupti dolores consectetur unde deserunt, nisi aliquid, molestias accusamus aperiam illo voluptatem odit quaerat! Modi repellat tempore aliquam, eaque blanditiis laborum omnis excepturi harum atque delectus accusamus laboriosam saepe commodi dolore quidem, molestiae sit vel, exercitationem possimus dignissimos ipsa maxime. Architecto vitae rerum quo obcaecati eveniet vero velit voluptas doloribus sint hic, est laborum minima, odit consectetur, et neque sapiente. Fugit ipsum suscipit consectetur necessitatibus enim blanditiis ratione, dolore ducimus temporibus? Modi sequi explicabo labore nostrum. Eum quos, ducimus illum veniam enim perferendis minima animi aperiam earum quis accusantium provident maxime doloremque maiores iusto aliquam? Velit sed adipisci consequatur, consequuntur voluptas quis repellendus placeat doloribus, quidem nulla, porro labore asperiores sint. Ducimus doloribus, dicta sequi consectetur in reiciendis?",
    },
    {
      title: "Kahve Dünyası İstanbul",
      image: [photo2, photo1, photo3],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero voluptatem expedita dicta alias architecto libero, fugit, quisquam doloremque maiores, doloribus vitae consequatur illo dolores voluptatum esse laboriosam. Eum blanditiis corporis cumque corrupti dolores consectetur unde deserunt, nisi aliquid, molestias accusamus aperiam illo voluptatem odit quaerat! Modi repellat tempore aliquam, eaque blanditiis laborum omnis excepturi harum atque delectus accusamus laboriosam saepe commodi dolore quidem, molestiae sit vel, exercitationem possimus dignissimos ipsa maxime. Architecto vitae rerum quo obcaecati eveniet vero velit voluptas doloribus sint hic, est laborum minima, odit consectetur, et neque sapiente. Fugit ipsum suscipit consectetur necessitatibus enim blanditiis ratione, dolore ducimus temporibus? Modi sequi explicabo labore nostrum. Eum quos, ducimus illum veniam enim perferendis minima animi aperiam earum quis accusantium provident maxime doloremque maiores iusto aliquam? Velit sed adipisci consequatur, consequuntur voluptas quis repellendus placeat doloribus, quidem nulla, porro labore asperiores sint. Ducimus doloribus, dicta sequi consectetur in reiciendis?",
    },
    {
      title: "Kahve Dünyası Mersin",
      image: [photo1, photo2, photo3],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero voluptatem expedita dicta alias architecto libero, fugit, quisquam doloremque maiores, doloribus vitae consequatur illo dolores voluptatum esse laboriosam. Eum blanditiis corporis cumque corrupti dolores consectetur unde deserunt, nisi aliquid, molestias accusamus aperiam illo voluptatem odit quaerat! Modi repellat tempore aliquam, eaque blanditiis laborum omnis excepturi harum atque delectus accusamus laboriosam saepe commodi dolore quidem, molestiae sit vel, exercitationem possimus dignissimos ipsa maxime. Architecto vitae rerum quo obcaecati eveniet vero velit voluptas doloribus sint hic, est laborum minima, odit consectetur, et neque sapiente. Fugit ipsum suscipit consectetur necessitatibus enim blanditiis ratione, dolore ducimus temporibus? Modi sequi explicabo labore nostrum. Eum quos, ducimus illum veniam enim perferendis minima animi aperiam earum quis accusantium provident maxime doloremque maiores iusto aliquam? Velit sed adipisci consequatur, consequuntur voluptas quis repellendus placeat doloribus, quidem nulla, porro labore asperiores sint. Ducimus doloribus, dicta sequi consectetur in reiciendis?",
    },
  ];

  return (
    <Container sx={{ padding: { xs: "0rem 1rem 2rem 1rem", md: " 0rem" } }}>
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: "1.3rem",
          fontSize: { xs: "2rem", md: "5rem" },
        }}
      >
        Güncel Projelerimiz
      </Typography>
      <Grid container spacing={2}>
        {data.map((proje,index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            sx={{ position: "relative", cursor: "pointer" }}
            onClick={() => navigate("myprojects/:id")}
          >
            <Box
              component="img"
              src={proje.image[0]}
              alt="Mobilya"
              sx={{
                width: "100%",
                height: { xs: "13rem", md: "17rem" },
                borderRadius: "8px",
                objectFit: "cover",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{
                backgroundColor: "rgba(172, 172, 172, 0.4)",
                color: "white",
                textAlign: "center",
                fontSize: { xs: "0.8rem ", md: "1.3rem" },
                borderRadius: "1rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              p={2}
            >
              {proje.title}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProjects;

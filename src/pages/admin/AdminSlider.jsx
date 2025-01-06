import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useSliderRequest from "../../hooks/useSliderRequest";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import photo from "../../assets/images/photo2.jpg";

const AdminSlider = () => {
  //* loading error (farklı)
  const { getSlider } = useSliderRequest();

  useEffect(() => {
    getSlider();
  }, []);

  const { slider } = useSelector((state) => state.data);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: { xs: "1rem", md: "2rem" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: "0.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Anasayfa Slider
      </Typography>
      {slider?.map((item) => (
        <Card
          key={item._id}
          sx={{
            width: "65rem",
            maxWidth: "100%",
            height: { xs: "25rem", md: "15rem" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "1rem",
          }}
        >
          <CardMedia
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "15rem",
            }}
            image={photo}
            // image={`${process.env.REACT_APP_BASE_URL}/${slider?.image}`}
            title={item.title}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              width: { xs: "100%", md: "60%" },
            }}
          >
            <CardContent sx={{ height: "70%" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                }}
              >
                {item.title}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                gap: "1rem",
                height: "30%",
              }}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  backgroundColor: "primary.main",
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
              >
                Güncelle
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  textTransform: "none",
                  borderColor: "error.main",
                  color: "error.main",
                  "&:hover": { backgroundColor: "error.light", color: "white" },
                }}
              >
                Sil
              </Button>
            </CardActions>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default AdminSlider;

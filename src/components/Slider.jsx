import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useSliderRequest from "../hooks/useSliderRequest";
import { useSelector } from "react-redux";

const Slider = () => {
  //--------------------------------------
  const { getSlider } = useSliderRequest();

  useEffect(() => {
    getSlider();
  }, []);

  const { slider, error, loading } = useSelector((state) => state.data);
  //--------------------------------------
  const [imagesCount, setImagesCount] = useState(0);

  //5 saniyede bir slider değişir
  useEffect(() => {
    const interval = setInterval(() => {
      setImagesCount((prevCount) => (prevCount + 1) % slider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slider, imagesCount]);

  //tıklandığında slider değişsin diye
  const handleCount = (num) => {
    if (imagesCount + num < 0) {
      num = slider.length - 1;
    }
    setImagesCount((prevCount) => (prevCount + num) % slider.length);
  };

  return (
    <>
      {!loading && error && (
        <Alert severity="error" sx={{ width: "80%", margin: "auto" }}>
          Bu bilgiler yüklenemedi, şuanda bir hata var sayfayı yenileyiniz!
        </Alert>
      )}

      {loading ? (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <CircularProgress color="inherit" size={150} />
        </Container>
      ) : (
        !error && (
          <Box
            sx={{
              position: "relative",
              height: { xs: "15rem", sm: "32rem" },
              width: { xs: "100%", md: "65rem", xl: "90rem" },
              overflow: "hidden",
              margin: "auto",
            }}
          >
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: { xs: "1.2rem", md: "2rem" },
                  fontWeight: "bold",
                  textShadow: "4px 2px 8px rgba(0, 0, 0, 1)",
                  padding: "0 1rem",
                  textAlign: "center",
                  maxWidth: "80%",
                  lineHeight: 1.5,
                }}
              >
                {slider[imagesCount]?.title}
              </Typography>
              <Box
                component="img"
                src={`${process.env.REACT_APP_BASE_URL}/${slider[imagesCount]?.image}`}
                alt={slider[imagesCount]?.title}
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
        )
      )}
    </>
  );
};

export default Slider;

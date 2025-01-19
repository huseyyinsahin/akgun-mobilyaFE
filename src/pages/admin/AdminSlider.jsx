import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useSliderRequest from "../../hooks/useSliderRequest";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import SliderForm from "../../components/adminComponents/SliderForm";

const AdminSlider = () => {
  const { getSlider } = useSliderRequest();

  useEffect(() => {
    getSlider();
  }, []);

  const { slider, loading, error } = useSelector((state) => state.data);

  //formu açma kapama
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
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
          <CircularProgress color="primary" size={150} />
        </Container>
      ) : (
        !error && (
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
            <Box
              sx={{
                width: "65rem",
                maxWidth: "100%",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "primary.main",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Anasayfa Slider
              </Typography>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{ height: "2rem", textTransform: "none" }}
              >
                Ekle
              </Button>
            </Box>
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
                  image={`${process.env.REACT_APP_BASE_URL}/${item?.image}`}
                  alt={item.title}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: { xs: "0rem", md: "1rem" },
                    width: { xs: "100%", md: "60%" },
                    height: "15rem",
                  }}
                >
                  <CardContent sx={{ height: "70%" }}>
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                      height: "30%",
                      marginBottom: { xs: "0rem", md: "1rem" },
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
                        "&:hover": {
                          backgroundColor: "error.light",
                          color: "white",
                        },
                      }}
                    >
                      Sil
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            ))}
            <SliderForm open={open} handleClose={handleClose} />
          </Box>
        )
      )}
    </>
  );
};

export default AdminSlider;

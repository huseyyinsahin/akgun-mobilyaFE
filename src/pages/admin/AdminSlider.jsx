import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
  const { getSlider, deleteSlider } = useSliderRequest();

  useEffect(() => {
    getSlider();
  }, []);

  const { slider, loading, error } = useSelector((state) => state.data);

  //formu açma kapama
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //güncelleme işlemi yapılırken form'a verilerin gitmesi için
  const [updateData, setUpdateData] = useState(false);

  //silinecek slider'ın id si
  const [sliderDeleteId, setSliderDeleteId] = useState("");

  // delete dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSliderDeleteId("");
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
          <CircularProgress color="black" size={150} />
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
                  background:
                    "linear-gradient(145deg, #7E643C, #A8906C, #D7C4A5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Anasayfa Slider
              </Typography>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{
                  height: "2rem",
                  textTransform: "none",
                  backgroundColor: "#A8906C",
                }}
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
                      onClick={() => {
                        setOpen(true);
                        setUpdateData(item);
                      }}
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#A8906C",
                        "&:hover": { backgroundColor: "#7E643C" },
                      }}
                    >
                      Güncelle
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        setOpenDialog(true);
                        setSliderDeleteId(item._id);
                      }}
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
            <SliderForm
              open={open}
              handleClose={handleClose}
              updateData={updateData}
              setUpdateData={setUpdateData}
            />

            <Dialog open={openDialog} onClose={handleDialogClose}>
              <DialogTitle
                component="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                  textAlign: "center",
                }}
              >
                Slider Silme
              </DialogTitle>
              <DialogContent
                sx={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  color: "text.secondary",
                }}
              >
                Bu slider'ı silmek istediğinize emin misiniz?
              </DialogContent>
              <DialogActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDialogClose}
                  sx={{
                    px: 3,
                    borderRadius: "8px",
                    textTransform: "none",
                  }}
                >
                  İptal
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    deleteSlider(sliderDeleteId);
                    handleDialogClose();
                  }}
                  sx={{
                    px: 3,
                    borderRadius: "8px",
                    textTransform: "none",
                    ml: 2,
                  }}
                >
                  Onayla
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        )
      )}
    </>
  );
};

export default AdminSlider;

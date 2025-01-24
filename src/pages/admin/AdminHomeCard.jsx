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
import useHomeCardRequest from "../../hooks/useHomeCardRequest";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import HomeCardForm from "../../components/adminComponents/HomeCardForm";

const AdminHomeCard = () => {
  const { getHomeCard, deleteHomeCard } = useHomeCardRequest();

  useEffect(() => {
    getHomeCard();
  }, []);

  const { homeCard, loading, error } = useSelector((state) => state.data);

  //formu açma kapama
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //güncelleme işlemi yapılırken form'a verilerin gitmesi için
  const [updateData, setUpdateData] = useState(false);

  //silinecek HomeCard'ın id si
  const [homeCardDeleteId, setHomeCardDeleteId] = useState("");

  // delete dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
    setHomeCardDeleteId("");
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
                  fontSize: { xs: "1.5rem", md: "3rem" },
                }}
              >
                Anasayfa Bilgi Kartları
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
            {homeCard?.map((item) => (
              <Card
                key={item._id}
                sx={{
                  width: "65rem",
                  maxWidth: "100%",
                  height: { xs: "27rem", md: "15rem" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  borderRadius: "1rem",
                }}
              >
                <CardContent
                  sx={{
                    height: { xs: "80%", md: "100%" },
                    width: { xs: "90%", md: "80%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      lineHeight: "2.5rem",
                      borderBottom: "1px solid lightgray",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      marginTop: "0.7rem",
                      textAlign: "justify",
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: { xs: "20%", md: "100%" },
                    borderLeft: { xs: "none", md: "1px solid lightgray" },
                    width: { xs: "100%", md: "20%" },
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
                      setHomeCardDeleteId(item._id);
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
              </Card>
            ))}
            <HomeCardForm
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
                Kart Silme
              </DialogTitle>
              <DialogContent
                sx={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  color: "text.secondary",
                }}
              >
                Bu Kartı silmek istediğinize emin misiniz?
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
                    deleteHomeCard(homeCardDeleteId);
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

export default AdminHomeCard;

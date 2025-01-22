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
import useAboutRequest from "../../hooks/useAboutRequest";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AboutForm from "../../components/adminComponents/AboutForm";

const AdminAbout = () => {
  const { getAbout, deleteAbout } = useAboutRequest();

  useEffect(() => {
    getAbout();
  }, []);

  const { about, loading, error } = useSelector((state) => state.data);

  //formu açma kapama
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //güncelleme işlemi yapılırken form'a verilerin gitmesi için
  const [updateData, setUpdateData] = useState(false);

  //silinecek About'ın id si
  const [aboutDeleteId, setAboutDeleteId] = useState("");

  // delete dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
    setAboutDeleteId("");
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
                  fontSize: { xs: "1.5rem", md: "3rem" },
                }}
              >
                Hakkımızda
              </Typography>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{ height: "2rem", textTransform: "none" }}
              >
                Ekle
              </Button>
            </Box>

            {about?.map((item) => (
              <Card
                key={item._id}
                sx={{
                  width: "65rem",
                  maxWidth: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  borderRadius: "1rem",
                }}
              >
                <CardContent
                  sx={{
                    borderBottom: "1px solid lightgray",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: "500",
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
                    width: "100%",
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
                      backgroundColor: "primary.main",
                      "&:hover": { backgroundColor: "primary.dark" },
                    }}
                  >
                    Güncelle
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      setOpenDialog(true);
                      setAboutDeleteId(item._id);
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

            <AboutForm
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
                Hakkımızda Silme
              </DialogTitle>
              <DialogContent
                sx={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  color: "text.secondary",
                }}
              >
                Bu yazıyı silmek istediğinize emin misiniz?
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
                    deleteAbout(aboutDeleteId);
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

export default AdminAbout;

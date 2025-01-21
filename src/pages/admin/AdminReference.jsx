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
import useReferenceRequest from "../../hooks/useReferenceRequest";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ReferenceForm from "../../components/adminComponents/ReferenceForm";

const AdminReference = () => {
  const { getReference, deleteReference } = useReferenceRequest();

  useEffect(() => {
    getReference();
  }, []);

  const { reference, loading, error } = useSelector((state) => state.data);

  //formu açma kapama
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //güncelleme işlemi yapılırken form'a verilerin gitmesi için
  const [updateData, setUpdateData] = useState(false);

  //silinecek Reference'ın id si
  const [referenceDeleteId, setReferenceDeleteId] = useState("");

  // delete dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
    setReferenceDeleteId("");
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
                Anasayfa Referanslar
              </Typography>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{ height: "2rem", textTransform: "none" }}
              >
                Ekle
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {reference?.map((item) => (
                <Card
                  key={item._id}
                  sx={{
                    width: { xs: "20rem", md: "25rem" },
                    maxWidth: "100%",
                    height: "10rem",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "1rem",
                  }}
                >
                  <CardContent
                    sx={{
                      height: "40%",
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {item.reference}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "60%",
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
                        setReferenceDeleteId(item._id);
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
            </Box>

            <ReferenceForm
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
                Referans Silme
              </DialogTitle>
              <DialogContent
                sx={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  color: "text.secondary",
                }}
              >
                Bu Referansı silmek istediğinize emin misiniz?
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
                    deleteReference(referenceDeleteId);
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

export default AdminReference;

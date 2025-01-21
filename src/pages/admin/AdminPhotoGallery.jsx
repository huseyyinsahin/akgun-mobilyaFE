import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import usePhotoGalleryRequest from "../../hooks/usePhotoGalleryRequest";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PhotoGalleryForm from "../../components/adminComponents/PhotoGalleryForm";

const AdminPhotoGallery = () => {
  const { getPhotoGallery, deletePhotoGallery } = usePhotoGalleryRequest();

  useEffect(() => {
    getPhotoGallery(1, 10);
  }, []);

  const { photoGallery, photoGalleryPages, loading, error } = useSelector(
    (state) => state.data
  );

  //formu açma kapama
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //güncelleme işlemi yapılırken form'a verilerin gitmesi için
  const [updateData, setUpdateData] = useState(false);

  //silinecek fotografın id si
  const [photoGalleryDeleteId, setPhotoGalleryDeleteId] = useState("");

  // delete dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
    setPhotoGalleryDeleteId("");
  };

  // sayfalar arası geçiş
  const [page, setPage] = useState(1);

  const handlePage = (e, val) => {
    setPage(val);
    getPhotoGallery(val, 10);
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
                Anasayfa Galeri
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
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "80rem",
                maxWidth: "100%",
                gap: "1rem",
              }}
            >
              {photoGallery?.map((item) => (
                <Card
                  key={item._id}
                  sx={{
                    width: "35rem",
                    maxWidth: "100%",
                    height: { xs: "15rem", md: "20rem" },
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "1rem",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "100%",
                      height: "90%",
                    }}
                    image={`${process.env.REACT_APP_BASE_URL}/${item?.image}`}
                    alt="mobilya"
                  />
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "10%",
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
                        setPhotoGalleryDeleteId(item._id);
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

            <Pagination
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem",
                "& .MuiPaginationItem-root": {
                  backgroundColor: "primary.main",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "primary.light",
                    color: "#FFF",
                    borderColor: "#555",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "primary.light",
                    color: "white",
                    borderColor: "black",
                  },
                },
                "& .MuiPaginationItem-ellipsis": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
              onChange={handlePage}
              page={page}
              count={photoGalleryPages.total}
              variant="outlined"
            />

            <PhotoGalleryForm
              open={open}
              handleClose={handleClose}
              updateData={updateData}
              setUpdateData={setUpdateData}
              page={page} // page bilgisini göndermemizin sebebi, PhotoGalleryForm'da create update gibi işlemler yapılınca yine aynı sayfada kalabilmesini sağlamak | örnek: 3. sayfadaki bir fotograf güncellenince, güncelleme isteği yapılıp bittikten sonra yine aynı sayfaya istek yapılsın ve güncel bir şekilde 3. sayfa geri gelmiş olsun, ilk sayfaya geri dönmemiş olsun.
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
                Fotograf Silme
              </DialogTitle>
              <DialogContent
                sx={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  color: "text.secondary",
                }}
              >
                Bu fotografı silmek istediğinize emin misiniz?
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
                    deletePhotoGallery(photoGalleryDeleteId, page);
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

export default AdminPhotoGallery;

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Dialog,
  Divider,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";
import usePhotoGalleryRequest from "../../hooks/usePhotoGalleryRequest";
import { useSelector } from "react-redux";

const PhotoGallery = () => {
  //! loading (belki)
  //-------------------------------------------------------------
  // istek atma ve sayfa sayısı
  const { getPhotoGallery } = usePhotoGalleryRequest();

  useEffect(() => {
    getPhotoGallery();
  }, []);

  const { photoGallery, photoGalleryPages, error, loading } = useSelector(
    (state) => state.data
  );

  const [page, setPage] = useState(1);

  const handlePage = (e, val) => {
    setPage(val);
    getPhotoGallery(val);
  };

  //-------------------------------------------------------------
  // hangi görselde oldugumuzu ve görselin indexini tutan kodlar
  const [imagesCount, setImagesCount] = useState(0);

  const handleCount = (num) => {
    if (imagesCount + num < 0) {
      num = photoGallery.length - 1;
    }
    setImagesCount((prevCount) => (prevCount + num) % photoGallery.length);
  };

  const handlePhoto = (num) => {
    setImagesCount(num);
  };

  // görselleri tam ekran görmek için
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
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
            height: "80vh",
          }}
        >
          <CircularProgress color="inherit" size={150} />
        </Container>
      ) : (
        !error && (
          <Box
            sx={{
              position: "relative",
              height: { xs: "20rem", md: "30rem" },
              width: "100%",
              margin: "auto",
              overflow: "hidden",
              marginTop: "0.5rem",
            }}
          >
            <Box>
              <Box
                component="img"
                src={`${process.env.REACT_APP_BASE_URL}/${photoGallery[imagesCount]?.image}`}
                onClick={() =>
                  handleImageClick(photoGallery[imagesCount].image)
                }
                alt="Mobilya"
                sx={{
                  width: "100%",
                  height: { xs: "20rem", md: "30rem" },
                  objectFit: "contain",
                  backgroundSize: "cover",
                  cursor: "pointer",
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

      <Divider sx={{ marginTop: "1rem" }} />
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        {photoGallery?.map((item, index) => (
          <Box
            key={item._id}
            sx={{
              cursor: "pointer",
              borderBottom: imagesCount === index ? "2px solid black" : "none",
            }}
          >
            <img
              onClick={() => handlePhoto(index)}
              width="150px"
              height="100px"
              src={`${process.env.REACT_APP_BASE_URL}/${item?.image}`}
              alt="Mobilya"
            />
          </Box>
        ))}
      </Container>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}
        onChange={handlePage}
        page={page}
        count={photoGalleryPages.total}
        variant="outlined"
      />
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <>
          <Box
            component="img"
            src={`${process.env.REACT_APP_BASE_URL}/${selectedImage}`}
            alt="Mobilya"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              position: "relative",
            }}
          />
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              border: "2px solid gray",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white",
            }}
          />
        </>
      </Dialog>
    </>
  );
};

export default PhotoGallery;

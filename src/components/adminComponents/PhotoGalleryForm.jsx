import React, { useState } from "react";
import { Box, Modal, Typography, Button, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import usePhotoGalleryRequest from "../../hooks/usePhotoGalleryRequest";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const PhotoGalleryForm = ({
  open,
  handleClose,
  updateData,
  setUpdateData,
  page,
}) => {
  const { postPhotoGallery, updatePhotoGallery } = usePhotoGalleryRequest();
  const [previewImage, setPreviewImage] = useState(null); // kullanıcının fotografı görebilmesi için

  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "15rem", md: "25rem" },
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Galeri
        </Typography>
        <Formik
          initialValues={
            updateData
              ? {
                  image: updateData.image, // görsel silinmediyse görselin path'i buraya gider (görsel eğer silinirse, bu property null olarak ayarlanır)
                  images: null, // görseller buraya gider
                }
              : {
                  images: null,
                }
          }
          onSubmit={(values, actions) => {
            if (updateData) {
              updatePhotoGallery(values, updateData._id, page);
            } else {
              postPhotoGallery(values, page);
            }
            setUpdateData(false);
            actions.resetForm();
            setPreviewImage(null);
            handleClose();
          }}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form>
                <Stack spacing={2}>
                  {values.image && (
                    <Typography
                      sx={{
                        fontSize: "0.6rem",
                        color: "gray",
                        textAlign: "center",
                      }}
                    >
                      Aşağıdaki görseli sildikten sonra yerine yeni görsel
                      yükleyebilirsiniz
                    </Typography>
                  )}

                  {/* görsel varsa eğer görsel yükleme butonu gözükmesin */}
                  {!values.images && !values.image && (
                    <>
                      <Button variant="contained" component="label">
                        Görsel Yükle
                        <input
                          type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          hidden
                          onChange={(e) => {
                            const file = e.currentTarget.files[0];
                            setFieldValue("images", file);
                            setPreviewImage(URL.createObjectURL(file));
                          }}
                        />
                      </Button>
                      <Typography
                        sx={{
                          fontSize: "0.6rem",
                          color: "gray",
                          textAlign: "center",
                        }}
                      >
                        ● Görsel yüklenmelidir!
                        <br />● Yatay görseller yüklemeniz tavsiye edilir.
                        <br />● Sadece JPEG, JPG ve PNG formatında yükleme
                        yapılabilir.
                      </Typography>
                    </>
                  )}

                  {(previewImage || values.images || values.image) && (
                    <Box sx={{ mt: 2, position: "relative" }}>
                      <img
                        src={
                          updateData && values.image
                            ? `${process.env.REACT_APP_BASE_URL}${values.image}`
                            : previewImage
                        }
                        alt="mobilya"
                        style={{
                          width: "100%",
                          maxHeight: "20rem",
                          borderRadius: "8px",
                        }}
                      />
                      <DeleteOutlinedIcon
                        onClick={() => {
                          setFieldValue("images", null);
                          setFieldValue("image", null);
                          setPreviewImage(null);
                        }}
                        sx={{
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                          fontSize: "2rem",
                          color: "red",
                          cursor: "pointer",
                          "&:hover": { transform: "scale(1.15)" },
                        }}
                      />
                    </Box>
                  )}

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        setUpdateData(false);
                        setPreviewImage(null);
                        handleClose();
                      }}
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      İptal
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      Gönder
                    </Button>
                  </Stack>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Modal>
  );
};

export default PhotoGalleryForm;

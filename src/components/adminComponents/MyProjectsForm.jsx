import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Button,
  Stack,
  Container,
  CircularProgress,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import useProjectsRequest from "../../hooks/useProjectsRequest";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";

const MyProjectsForm = ({
  open,
  handleClose,
  projectsId,
  setProjectsId,
  page,
}) => {
  const { postProjects, updateProjects, readProjects } = useProjectsRequest();
  const [previewImage, setPreviewImage] = useState([]); // kullanıcının fotografı görebilmesi için

  useEffect(() => {
    if (projectsId) {
      readProjects(projectsId);
    }
  }, [projectsId]);

  const { projectDetails } = useSelector((state) => state.data);

  const projectsSchema = object({
    title: string()
      .required("Başlık gerekli")
      .max(50, "Başlık en fazla 50 karakter olabilir"),
    text: string().required("Açıklama gerekli"),
  });

  return (
    <>
      {!projectDetails ? (
        <Modal open={open}>
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
        </Modal>
      ) : (
        <Modal open={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "20rem", md: "75rem" },
              maxWidth: "100%",
              maxHeight: "90vh",
              bgcolor: "background.paper",
              borderRadius: "8px",
              boxShadow: 24,
              p: 3,
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Projeler
            </Typography>
            <Formik
              initialValues={
                projectsId
                  ? {
                      title: projectDetails.title,
                      text: projectDetails.text,
                      image: projectDetails.image, // görseller silinmediyse görselin path'i buraya gider (görseller eğer silinirse, bir şey göndermeye gerek yoktur)
                      images: [], // görseller buraya gider
                    }
                  : {
                      title: "",
                      text: "",
                      images: [],
                    }
              }
              validationSchema={projectsSchema}
              onSubmit={(values, actions) => {
                if (projectsId) {
                  updateProjects(values, projectsId, page);
                } else {
                  postProjects(values, page);
                }
                setProjectsId(false);
                setPreviewImage([]);
                actions.resetForm();
                handleClose();
              }}
            >
              {({
                setFieldValue,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => {
                return (
                  <Form>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "1rem",
                      }}
                    >
                      <Stack
                        spacing={2}
                        sx={{
                          display: "flex",
                          width: { xs: "100%", md: "40%" },
                        }}
                      >
                        <TextField
                          label="Başlık"
                          name="title"
                          type="text"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.title && Boolean(errors.title)}
                          helperText={touched.title && errors.title}
                          fullWidth
                        />
                        <TextField
                          label="Açıklama"
                          name="text"
                          type="text"
                          multiline
                          rows={15}
                          value={values.text}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.text && Boolean(errors.text)}
                          helperText={touched.text && errors.text}
                          fullWidth
                        />

                        <>
                          <Button variant="contained" component="label">
                            Görsel Yükle
                            <input
                              type="file"
                              accept="image/png, image/jpeg, image/jpg"
                              hidden
                              onChange={(e) => {
                                const file =
                                  e.currentTarget.files[
                                    e.currentTarget.files.length - 1
                                  ]; // son yüklenen dosyayı seçebilmek için

                                setFieldValue("images", [
                                  ...(values.images || []),
                                  file,
                                ]);

                                setPreviewImage([
                                  ...previewImage,
                                  URL.createObjectURL(file),
                                ]);
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

                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => {
                              setProjectsId(false);
                              setPreviewImage([]);
                              handleClose();
                            }}
                            sx={{
                              textTransform: "none",
                              padding: "0.8rem 3rem",
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
                              padding: "0.8rem 3rem",
                            }}
                          >
                            Gönder
                          </Button>
                        </Stack>
                      </Stack>
                      <Stack
                        sx={{
                          width: { xs: "100%", md: "60%" },
                          overflowY: "auto",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          {(previewImage || values?.image) && (
                            <>
                              {values?.image &&
                                values.image?.map((img) => (
                                  <Box
                                    key={img}
                                    sx={{
                                      position: "relative",
                                      width: "100%",
                                    }}
                                  >
                                    <img
                                      src={`${process.env.REACT_APP_BASE_URL}/${img}`}
                                      alt="mobilya"
                                      style={{
                                        width: "100%",
                                        maxHeight: "30rem",
                                        borderRadius: "8px",
                                      }}
                                    />
                                    <DeleteOutlinedIcon
                                      onClick={() => {
                                        let deletedValues = values.image;
                                        deletedValues = deletedValues.filter(
                                          (deleteImage) => deleteImage !== img
                                        );
                                        setFieldValue("image", deletedValues);
                                        // bu işlemleri yapmamızın sebebi güncelleme işlemi yapılırken gelen fotografları kullanıcı sildiğinde doğru bir şekilde silmesi için
                                      }}
                                      sx={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        fontSize: "2rem",
                                        color: "red",
                                        cursor: "pointer",
                                        "&:hover": { transform: "scale(1.15)" },
                                      }}
                                    />
                                  </Box>
                                ))}

                              {previewImage?.map((img) => (
                                <Box
                                  key={img}
                                  sx={{
                                    position: "relative",
                                    width: "100%",
                                  }}
                                >
                                  <img
                                    src={img}
                                    alt="mobilya"
                                    style={{
                                      width: "100%",
                                      maxHeight: "30rem",
                                      borderRadius: "8px",
                                    }}
                                  />
                                  <DeleteOutlinedIcon
                                    onClick={() => {
                                      const indexToDelete =
                                        previewImage.indexOf(img);

                                      const deleteImages = [...values.images];
                                      deleteImages.splice(indexToDelete, 1);

                                      setFieldValue("images", deleteImages);

                                      const deletePreviewImages = [
                                        ...previewImage,
                                      ];
                                      deletePreviewImages.splice(
                                        indexToDelete,
                                        1
                                      );

                                      setPreviewImage(deletePreviewImages);
                                      // önce tıklanan indexi tespit ediyoruz sonra o indexteki elemanı hem previewImage'den hemde values.images'ten siliyoruz
                                    }}
                                    sx={{
                                      position: "absolute",
                                      top: "10px",
                                      right: "10px",
                                      fontSize: "2rem",
                                      color: "red",
                                      cursor: "pointer",
                                      "&:hover": { transform: "scale(1.15)" },
                                    }}
                                  />
                                </Box>
                              ))}
                            </>
                          )}
                        </Box>
                      </Stack>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default MyProjectsForm;

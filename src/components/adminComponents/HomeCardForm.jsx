import React from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { object, string } from "yup";
import { Form, Formik } from "formik";
import useHomeCardRequest from "../../hooks/useHomeCardRequest";

const HomeCardForm = ({ open, handleClose, updateData, setUpdateData }) => {
  const { postHomeCard, updateHomeCard } = useHomeCardRequest();

  const homeCardSchema = object({
    title: string()
      .required("Başlık gerekli")
      .max(18, "Başlık 18 karakterden uzun olamaz"),
    text: string()
      .required("Yazı gerekli")
      .max(350, "Yazı 350 karakterden uzun olamaz"),
  });

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
          HomeCard Ekle
        </Typography>
        <Formik
          initialValues={
            //* updateData, HomeCardForm componentinin hangi modda çalıştığını belirler Eğer updateData doluysa (örneğin bir obje içeriyorsa), bu form bir güncelleme modu'ndadır ve updateDatanın içindeki mevcut veriler form alanlarına önceden doldurulur. Eğer updateData null, false veya undefined ise, form yeni bir Card ekleme modu'nda çalışır. İptal veya Gönder butonlarına basıldığında updateData sıfırlanır (false yapılır), böylece form her iki işlevi de yerine getirebilecek şekilde yeniden kullanıma hazır olur.
            updateData
              ? {
                  title: updateData.title,
                  text: updateData.text,
                }
              : {
                  title: "",
                  text: "",
                }
          }
          validationSchema={homeCardSchema}
          onSubmit={(values, actions) => {
            if (updateData) {
              updateHomeCard(values, updateData._id);
            } else {
              postHomeCard(values);
            }
            setUpdateData(false);
            actions.resetForm();
            handleClose();
          }}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => {
            return (
              <Form>
                <Stack spacing={2}>
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
                    label="Yazı"
                    name="text"
                    type="text"
                    multiline
                    rows={8}
                    value={values.text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.text && Boolean(errors.text)}
                    helperText={touched.text && errors.text}
                    fullWidth
                  />
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

export default HomeCardForm;

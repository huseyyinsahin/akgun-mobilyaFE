import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import useSliderRequest from "../../hooks/useSliderRequest";

const SliderForm = ({ open, handleClose }) => {
  const { postSlider } = useSliderRequest();

  const sliderSchema = Yup.object({
    title: Yup.string()
      .required("Başlık gerekli")
      .max(50, "Başlık 50 karakterden uzun olamaz"),
    images: Yup.mixed()
      .required("Bir resim seçmelisiniz")
      .test(
        "fileFormat",
        "Sadece PNG, JPEG veya JPG formatında resim yükleyebilirsiniz",
        (value) =>
          value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      ),
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="slider-modal-title"
      aria-describedby="slider-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25rem",
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="slider-modal-title"
          variant="h6"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          Slider Ekle
        </Typography>
        <Formik
          initialValues={{
            title: "",
            images: null,
          }}
          validationSchema={sliderSchema}
          onSubmit={(values, actions) => {
            postSlider(values);
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
            const previewImage = values.images
              ? URL.createObjectURL(values.images)
              : null;
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

                  <Button
                    variant="contained"
                    component="label"
                  >
                    Resim Yükle
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      hidden
                      onChange={(e) => {
                        setFieldValue("images", e.currentTarget.files[0]);
                      }}
                    />
                  </Button>

                  {values.images && previewImage && (
                    <Box sx={{ mt: 2 }}>
                      <img
                        src={previewImage}
                        alt="mobilya"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  )}

                  {touched.images && errors.images && (
                    <Typography variant="body2" color="error">
                      {errors.images}
                    </Typography>
                  )}

                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={handleClose}
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

export default SliderForm;

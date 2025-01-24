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
import useReferenceRequest from "../../hooks/useReferenceRequest";

const ReferenceForm = ({ open, handleClose, updateData, setUpdateData }) => {
  const { postReference, updateReference } = useReferenceRequest();

  const referenceSchema = object({
    reference: string()
      .required("Referans gerekli")
      .max(18, "Referans 18 karakterden uzun olamaz"),
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
          Anasayfa Referans
        </Typography>
        <Formik
          initialValues={
            //* updateData, ReferenceForm componentinin hangi modda çalıştığını belirler Eğer updateData doluysa (örneğin bir obje içeriyorsa), bu form bir güncelleme modu'ndadır ve updateDatanın içindeki mevcut veriler form alanlarına önceden doldurulur. Eğer updateData null, false veya undefined ise, form yeni bir Card ekleme modu'nda çalışır. İptal veya Gönder butonlarına basıldığında updateData sıfırlanır (false yapılır), böylece form her iki işlevi de yerine getirebilecek şekilde yeniden kullanıma hazır olur.
            updateData
              ? {
                  reference: updateData.reference,
                }
              : {
                  reference: "",
                }
          }
          validationSchema={referenceSchema}
          onSubmit={(values, actions) => {
            if (updateData) {
              updateReference(values, updateData._id);
            } else {
              postReference(values);
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
                    label="Referans"
                    name="reference"
                    type="text"
                    value={values.reference}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.reference && Boolean(errors.reference)}
                    helperText={touched.reference && errors.reference}
                    fullWidth
                  />
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#A8906C",
                        "&:hover": { backgroundColor: "#7E643C" },
                      }}
                    >
                      Gönder
                    </Button>
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

export default ReferenceForm;

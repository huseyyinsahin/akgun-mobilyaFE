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
import useAboutRequest from "../../hooks/useAboutRequest";

const AboutForm = ({ open, handleClose, updateData, setUpdateData }) => {
  const { postAbout, updateAbout } = useAboutRequest();

  const aboutSchema = object({
    text: string().required("Hakkımızda gerekli"),
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
          Hakkımızda
        </Typography>
        <Formik
          initialValues={
            //* updateData, AboutForm componentinin hangi modda çalıştığını belirler Eğer updateData doluysa (örneğin bir obje içeriyorsa), bu form bir güncelleme modu'ndadır ve updateDatanın içindeki mevcut veriler form alanlarına önceden doldurulur. Eğer updateData null, false veya undefined ise, form yeni bir Card ekleme modu'nda çalışır. İptal veya Gönder butonlarına basıldığında updateData sıfırlanır (false yapılır), böylece form her iki işlevi de yerine getirebilecek şekilde yeniden kullanıma hazır olur.
            updateData
              ? {
                  text: updateData.text,
                }
              : {
                  text: "",
                }
          }
          validationSchema={aboutSchema}
          onSubmit={(values, actions) => {
            if (updateData) {
              updateAbout(values, updateData._id);
            } else {
              postAbout(values);
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
                    label="Hakkımızda"
                    name="text"
                    type="text"
                    multiline
                    rows={10}
                    value={values.text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.text && Boolean(errors.text)}
                    helperText={touched.text && errors.text}
                    fullWidth
                  />
                  <Stack spacing={2}>
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

export default AboutForm;

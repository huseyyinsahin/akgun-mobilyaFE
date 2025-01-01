import { Form, Formik } from "formik";
import useAuthRequest from "../../hooks/useAuthRequest";
import { Button, TextField, Typography, Box, Container } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { object, string } from "yup";

const AdminLogin = () => {
  const { login } = useAuthRequest();

  const loginSchema = object({
    username: string()
      .required("Kullanıcı adı zorunludur")
      .min(3, "Kullanıcı adı minimum 3 karakter olabilir")
      .max(20, "Kullanıcı adı maximum 20 karakter olabilir"),

    password: string()
      .required("Şifre zorunludur")
      .min(8, "Şifre minimum 8 karakter olmalıdır")
      .max(20, "Şifre maximum 20 karakter olmalıdır")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter içermelidir (@$!%*?&)"
      ),
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "rgb(234, 234, 234)",
          padding: { xs: "20px", md: "0px" },
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            padding: { xs: "30px", md: "20px", xl: "60px 20px" },
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
            backgroundColor: "white",
          }}
        >
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              isSubmitting,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
              isValid,
            }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      cursor: "default",
                      fontFamily: "Lobster",
                      fontSize: { xs: "2.8rem", md: "3.5rem" },
                    }}
                  >
                    AKGÜN
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "Lobster",
                      fontSize: { xs: "01rem", md: "1.2rem" },
                      cursor: "default",
                    }}
                  >
                    Mobilya & Dekorasyon
                  </Typography>
                </Box>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Kullanıcı Adı"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                  error={touched.username && Boolean(errors.username)}
                  onBlur={handleBlur}
                  helperText={errors.username}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Şifre"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  onBlur={handleBlur}
                  helperText={errors.password}
                />
                <Typography
                  sx={{ textAlign: "center", color: " #0288d1", mt: 1 }}
                >
                  {Object.keys(touched).length > 0 && isValid && (
                    <CheckCircleIcon />
                  )}
                </Typography>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                  variant="contained"
                  sx={{
                    mb: 2,
                    mt: 2,
                    backgroundColor: "#2C2C2C",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  Giriş Yap
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default AdminLogin;

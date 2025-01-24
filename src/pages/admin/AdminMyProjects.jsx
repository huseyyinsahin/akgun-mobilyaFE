import {
  Alert,
  Box,
  CardContent,
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
import useProjectsRequest from "../../hooks/useProjectsRequest";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import MyProjectsForm from "../../components/adminComponents/MyProjectsForm";
import { setProjectDetails } from "../../features/dataSlice";

const AdminMyProjects = () => {
  const dispacth = useDispatch();
  const { getProjects, deleteProjects } = useProjectsRequest();

  useEffect(() => {
    getProjects(1);
  }, []);

  const { projects, projectsPages, loading, error } = useSelector(
    (state) => state.data
  );

  //formu açma kapama
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //seçilen projenin id si (silme işleminde id göndermek için ve güncelleme yapılırken detayların getirilmesinde işimize yarıyor)
  const [projectsId, setProjectsId] = useState(false);

  // delete dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
    setProjectsId("");
  };

  // sayfalar arası geçiş
  const [page, setPage] = useState(1);

  const handlePage = (e, val) => {
    setPage(val);
    getProjects(val);
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
          <CircularProgress color="black" size={150} />
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
                  background:
                    "linear-gradient(145deg, #7E643C, #A8906C, #D7C4A5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Projeler
              </Typography>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{
                  height: "2rem",
                  textTransform: "none",
                  backgroundColor: "#A8906C",
                }}
              >
                Ekle
              </Button>
            </Box>
            {projects?.map((item) => (
              <Card
                key={item._id}
                sx={{
                  width: "65rem",
                  maxWidth: "100%",
                  height: { xs: "25rem", md: "15rem" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  borderRadius: "1rem",
                }}
              >
                <CardMedia
                  sx={{
                    width: { xs: "100%", md: "40%" },
                    height: "15rem",
                  }}
                  image={`${process.env.REACT_APP_BASE_URL}/${item?.image[0]}`}
                  alt={item.title}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: { xs: "0rem", md: "1rem" },
                    width: { xs: "100%", md: "60%" },
                    height: "15rem",
                  }}
                >
                  <CardContent sx={{ height: "70%" }}>
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontSize: "1.3rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                      height: "30%",
                      marginBottom: { xs: "0rem", md: "1rem" },
                    }}
                  >
                    <Button
                      onClick={() => {
                        setOpen(true);
                        setProjectsId(item._id);
                        dispacth(setProjectDetails({ data: false }));
                        // normalde true olan bu projectDetails statesini güncelleye basıldıgında false çeviriyoruz çünkü MyProjectsForm componentinde ilk başta veriler gelene kadar loading gözüksün (MyProjectsForm'un 45. satırına bak).
                      }}
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#A8906C",
                        "&:hover": { backgroundColor: "#7E643C" },
                      }}
                    >
                      Güncelle
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        setOpenDialog(true);
                        setProjectsId(item._id);
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
                </Box>
              </Card>
            ))}

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
              count={projectsPages.total}
              variant="outlined"
            />

            <MyProjectsForm
              open={open}
              handleClose={handleClose}
              projectsId={projectsId}
              setProjectsId={setProjectsId}
              page={page} // page bilgisini göndermemizin sebebi, MyProjectsForm'da create update gibi işlemler yapılınca yine aynı sayfada kalabilmesini sağlamak | örnek: 3. sayfadaki bir fotograf güncellenince, güncelleme isteği yapılıp bittikten sonra yine aynı sayfaya istek yapılsın ve güncel bir şekilde 3. sayfa geri gelmiş olsun, ilk sayfaya geri dönmemiş olsun.
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
                Proje Silme
              </DialogTitle>
              <DialogContent
                sx={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  color: "text.secondary",
                }}
              >
                Bu projeyi silmek istediğinize emin misiniz?
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
                    deleteProjects(projectsId, page);
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

export default AdminMyProjects;

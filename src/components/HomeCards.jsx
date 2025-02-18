import {
  Alert,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import useHomeCardRequest from "../hooks/useHomeCardRequest";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function HomeCards() {
  const { getHomeCard } = useHomeCardRequest();

  useEffect(() => {
    getHomeCard();
  }, []);

  const { homeCard, error, loading } = useSelector((state) => state.data);

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
          <CircularProgress color="inherit" size={150} />
        </Container>
      ) : (
        !error && (
          <Container
            maxWidth="xl"
            sx={{ padding: { xs: "1rem", md: "4rem 2rem" } }}
          >
            <Grid container spacing={4} justifyContent="center">
              {homeCard.map((item) => (
                <Grid key={item._id} item xs={12} sm={6}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "15px",
                      boxShadow: 3,
                      "&:hover": {
                        boxShadow: 6,
                        transform: "scale(1.05)",
                      },
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    }}
                  >
                    <CardContent
                      sx={{ padding: { xs: "0.8rem", md: "1.5rem" } }}
                    >
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ fontWeight: "bold", color: "#2E3A59" }}
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: { xs: "0.8rem", md: "1rem" },
                        }}
                        paragraph
                      >
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )
      )}
    </>
  );
}

export default HomeCards;

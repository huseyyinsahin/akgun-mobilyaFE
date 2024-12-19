import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

function HomeCards() {
  const mockData = [
    {
      title: "Projeler",
      text: "Akgün Mobilya olarak, Konut, Rezidans, Ofis, Otel, Kafe, Restoran gibi tüm projeleri, işinde profesyonel ekibimizle ,gerekli hassasiyeti göstererek, hayallerin ötesinde, müşteri memnuniyeti odaklı ve söz verilen tarihte teslim edebilmek prensibi ile çalışmaktayız.",
    },
    {
      title: "Tasarım",
      text: " Firma olarak, uygulanacak alan ve müşterilerimizin beklentilerini çağın gerekleri ile harmanlayıp, görsel zenginliğin en güzel öğelerini kullanarak, benzersiz ve özgün tasarımlar oluşturuyoruz. Sonuç olarak dokusuyla, rengiyle, biçimiyle bütüncül bir estetiği, saygınlık uyandıran yaşam alanlarına dönüştürüyoruz.",
    },
    {
      title: "Uygulama",
      text: "Hayallerinizi, hayal ettiklerimizle birleştirip, İç mimarlık, proje, tasarım ve sonuç süreçleriyle sizler için en iyi, en güzel, en kullanışlı yaşam alanlarını görsel, dokunsal ve işitsel her türlü materyali kullanan profesyonel ve deneyimli kadromuzla hizmet vermekteyiz.",
    },
  ];
  return (
    <Box sx={{ padding: { xs: "2rem", md: "4rem 5rem" } }}>
      <Grid container spacing={4} justifyContent="center">
        {mockData.map((item) => (
          <Grid key={item.text} item xs={12} sm={6}>
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
              <CardContent sx={{ padding: "2rem" }}>
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
                  sx={{ lineHeight: 1.8, fontSize: "1rem" }}
                  paragraph
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomeCards;

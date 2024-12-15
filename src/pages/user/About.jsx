import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";

const About = () => {
  return (
    <Paper
      style={{
        padding: "2rem",
        margin: "auto",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
        width: "85vw",
        marginTop: "2rem",
        borderRadius: "15px",
        background: "linear-gradient(to bottom,rgb(230, 230, 230), #f9f9f9)",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
          color: "#2C2C2C",
        }}
      >
        Hakkımızda
      </Typography>
      <Divider style={{ marginBottom: "1.5rem", backgroundColor: "#2a3eb1" }} />
      <Box style={{ lineHeight: 1.8, textAlign: "justify" }}>
        <Typography
          variant="h6"
          color="text.secondary"
          style={{
            fontSize: "1.1rem",
            color: "#555",
            letterSpacing: "0.5px",
          }}
        >
          Erdoğan Akgün tarafından 1968 yılında Ümraniye'de kurularak hizmet
          vermeye başlayan firmamız, daha sonra 2000’li yılların başlarında
          Akgün Mobilya adıyla kurumsal bir kimlik kazanmış ve o günden sonra
          sektörde bilinen, güvenilen ve tercih edilen bir marka halini
          almıştır.
          <br />
          <br />
          Şu anda Harun Akgün yönetiminde hizmet veren Akgün Mobilya, Turizm,
          Otelcilik, Laboratuvar, Fuar, Cafe, Bar ve Mobilya sektörlerinde
          kusursuz hizmet sunmaya devam etmektedir. Yenilikçi tasarımlarımız ve
          pratik çözümlerimizle müşteri memnuniyetini her zaman ön planda
          tutarak sektörde kendimize sağlam bir yer edindik. Teknolojiyi ve
          sektör ihtiyaçlarını sürekli takip eden firmamız, hizmet anlayışını
          her geçen gün geliştirmektedir.
          <br />
          <br />
          Akgün Mobilya, uzman ekibi ve yıllara dayanan deneyimiyle tanınan bir
          marka olmuştur. Dünyaca ünlü markalarla iş birliği yaparak
          portföyümüzü zenginleştirdik. Çevre dostu faaliyetlerimiz ve yenilikçi
          vizyonumuz sayesinde hem kaynakları hem de zamanı en verimli şekilde
          kullanmayı başardık.
          <br />
          <br />
          Firmamız, kaliteli ürün ve hizmet sunma anlayışıyla, güvenilir ve öncü
          bir marka olarak sektördeki liderliğini sürdürmektedir. Her geçen gün
          büyüyen müşteri portföyümüz ve artan başarı grafiğimizle, gelecekte de
          siz değerli müşterilerimize en iyi hizmeti sunmaya devam edeceğiz.
        </Typography>
      </Box>
    </Paper>
  );
};

export default About;

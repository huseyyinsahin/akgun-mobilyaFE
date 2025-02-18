import {
  Alert,
  Box,
  Container,
  Grid,
  Pagination,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProjectsRequest from "../../hooks/useProjectsRequest";
import { useSelector } from "react-redux";

const MyProjects = () => {
  const navigate = useNavigate();

  const { getProjects } = useProjectsRequest();

  useEffect(() => {
    getProjects();
  }, []);

  const { error, loading, projects, projectsPages } = useSelector(
    (state) => state.data
  );

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
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Skeleton variant="rectangular" width="48%" height={400} />
          <Skeleton variant="rectangular" width="48%" height={400} />
          <Skeleton variant="rectangular" width="48%" height={400} />
          <Skeleton variant="rectangular" width="48%" height={400} />
          <Skeleton variant="rectangular" width="48%" height={400} />
          <Skeleton variant="rectangular" width="48%" height={400} />
        </Container>
      ) : (
        !error && (
          <Container>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "2rem", minHeight: { xl: "70rem" } }}
            >
              {projects?.map((proje) => (
                <Grid
                  key={proje._id}
                  item
                  xs={12}
                  md={6}
                  sx={{ margin: "0.6rem 0rem" }}
                >
                  <Box
                    component="img"
                    onClick={() => navigate(`/myprojects/${proje._id}`)}
                    src={`${process.env.REACT_APP_BASE_URL}/${proje.image[0]}`}
                    alt={proje.title}
                    sx={{
                      width: "100%",
                      height: { xs: "13rem", md: "17rem" },
                      objectFit: "cover",
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                  />
                  <Box
                    sx={{
                      backgroundColor: "#2C2C2C",
                      color: "white",
                      textAlign: "center",
                      fontSize: { xs: "0.8rem ", md: "1.3rem" },
                    }}
                    p={2}
                  >
                    {proje.title.length > 40
                      ? ` ${proje.title.slice(0, 40)}...`
                      : proje.title}
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Pagination
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem",
                "& .MuiPaginationItem-root": {
                  backgroundColor: "lightgray",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  color: "#444",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#3A3A3A",
                    color: "#FFF",
                    borderColor: "#555",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#444",
                    color: "#FFF",
                    borderColor: "#666",
                  },
                },
                "& .MuiPaginationItem-ellipsis": {
                  color: "#777",
                },
              }}
              onChange={handlePage}
              page={page}
              count={projectsPages?.total}
              variant="outlined"
            />
          </Container>
        )
      )}
    </>
  );
};

export default MyProjects;

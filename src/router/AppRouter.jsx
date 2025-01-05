import React from "react";
import Navbar from "../components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import MyProjects from "../pages/user/MyProjects";
import PhotoGallery from "../pages/user/PhotoGallery";
import Footer from "../components/Footer";
import MyProjectsDetail from "../pages/user/MyProjectsDetail";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminHome from "../pages/admin/AdminHome";
import AdminAbout from "../pages/admin/AdminAbout";
import AdminPhotoGallery from "../pages/admin/AdminPhotoGallery";
import AdminMyProjects from "../pages/admin/AdminMyProjects";
import PrivateRouter from "./PrivateRouter";
import AdminSlider from "../pages/admin/AdminSlider";
import AdminHomeCard from "../pages/admin/AdminHomeCard";
import AdminReference from "../pages/admin/AdminReference";
import AdminNavbar from "../components/adminComponents/AdminNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/photogallery", element: <PhotoGallery /> },
      { path: "/myprojects", element: <MyProjects /> },
      { path: "/myprojects/:id", element: <MyProjectsDetail /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    element: (
      <>
        <AdminNavbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/adminhome",
        element: (
          <PrivateRouter>
            <AdminHome />
          </PrivateRouter>
        ),
      },
      {
        path: "/adminslider",
        element: (
          <PrivateRouter>
            <AdminSlider />
          </PrivateRouter>
        ),
      },
      {
        path: "/adminhomecard",
        element: (
          <PrivateRouter>
            <AdminHomeCard />
          </PrivateRouter>
        ),
      },
      {
        path: "/adminreference",
        element: (
          <PrivateRouter>
            <AdminReference />
          </PrivateRouter>
        ),
      },
      {
        path: "/adminabout",
        element: (
          <PrivateRouter>
            <AdminAbout />
          </PrivateRouter>
        ),
      },
      {
        path: "/adminphotogallery",
        element: (
          <PrivateRouter>
            <AdminPhotoGallery />
          </PrivateRouter>
        ),
      },
      {
        path: "/adminmyprojects",
        element: (
          <PrivateRouter>
            <AdminMyProjects />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

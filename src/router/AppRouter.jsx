import React from "react";
import Navbar from "../components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import MyProjects from "../pages/user/MyProjects";
import PhotoGallery from "../pages/user/PhotoGallery";
import Footer from "../components/Footer";

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
      { path: "/contact", element: <Contact /> },
      { path: "/photogallery", element: <PhotoGallery /> },
      { path: "/myprojects", element: <MyProjects /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

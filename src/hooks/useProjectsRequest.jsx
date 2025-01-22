import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fail,
  setProjects,
  start,
  setProjectDetails,
} from "../features/dataSlice";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useProjectsRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getProjects = async (pageCount = "1") => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(
        `projects?page=${pageCount}&limit=6`
      );
      console.log(data);
      dispatch(setProjects(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  const readProjects = async (id) => {
    try {
      const { data } = await axiosPublic.get(`projects/${id}`);
      dispatch(setProjectDetails(data));
    } catch (error) {
    }
  };

  const postProjects = async (projectsData, currentPage) => {
    try {
      await axiosToken.post("projects", projectsData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toastSuccessNotify("Proje eklendi");
      getProjects(currentPage, 6);
    } catch (error) {
      toastErrorNotify("Proje ekleme başarısız!");
    }
  };

  const updateProjects = async (updateData, id, currentPage) => {
    try {
      await axiosToken.put(`projects/${id}`, updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toastSuccessNotify("Proje güncellendi");
      getProjects(currentPage, 6);
    } catch (error) {
      toastErrorNotify("Proje güncelleme başarısız!");
    }
  };

  const deleteProjects = async (id, currentPage) => {
    try {
      await axiosToken.delete(`projects/${id}`);
      toastSuccessNotify("Proje silindi");
      getProjects(currentPage, 6);
    } catch (error) {
      toastErrorNotify("Proje silinemedi!");
    }
  };

  return {
    getProjects,
    readProjects,
    postProjects,
    updateProjects,
    deleteProjects,
  };
};

export default useProjectsRequest;

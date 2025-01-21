import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, setPhotoGallery, start } from "../features/dataSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const usePhotoGalleryRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getPhotoGallery = async (pageCount = "1", limit = "21") => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(
        `photogallery?page=${pageCount}&limit=${limit}`
      );
      dispatch(setPhotoGallery(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  const postPhotoGallery = async (photoGalleryData, currentPage) => {
    try {
      await axiosToken.post("photoGallery", photoGalleryData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toastSuccessNotify("Fotograf eklendi");
      getPhotoGallery(currentPage, 10);
    } catch (error) {
      toastErrorNotify("Fotograf ekleme başarısız!");
    }
  };

  const updatePhotoGallery = async (updateData, id, currentPage) => {
    try {
      await axiosToken.put(`photoGallery/${id}`, updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toastSuccessNotify("Fotograf güncellendi");
      getPhotoGallery(currentPage, 10);
    } catch (error) {
      toastErrorNotify("Fotograf güncelleme başarısız!");
    }
  };

  const deletePhotoGallery = async (id, currentPage) => {
    try {
      await axiosToken.delete(`photoGallery/${id}`);
      toastSuccessNotify("Fotograf silindi");
      getPhotoGallery(currentPage, 10);
    } catch (error) {
      toastErrorNotify("Fotograf silinemedi!");
    }
  };

  return {
    getPhotoGallery,
    postPhotoGallery,
    deletePhotoGallery,
    updatePhotoGallery,
  };
};

export default usePhotoGalleryRequest;

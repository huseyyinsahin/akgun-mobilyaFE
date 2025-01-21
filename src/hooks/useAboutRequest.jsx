import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, setAbout, start } from "../features/dataSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAboutRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getAbout = async () => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`about`);
      dispatch(setAbout(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  const postAbout = async (aboutData) => {
    try {
      await axiosToken.post("about", aboutData);
      toastSuccessNotify("Hakkımızda yazısı eklendi");
      getAbout();
    } catch (error) {
      toastErrorNotify("Hakkımızda yazısı ekleme başarısız!");
    }
  };

  const updateAbout = async (updateData, id) => {
    try {
      await axiosToken.put(`about/${id}`, updateData);
      toastSuccessNotify("Hakkımızda yazısı güncellendi");
      getAbout();
    } catch (error) {
      toastErrorNotify("Hakkımızda yazısı güncelleme başarısız!");
    }
  };

  const deleteAbout = async (id) => {
    try {
      await axiosToken.delete(`about/${id}`);
      toastSuccessNotify("Hakkımızda yazısı silindi");
      getAbout();
    } catch (error) {
      toastErrorNotify("Hakkımızda yazısı silinemedi!");
    }
  };

  return { getAbout, postAbout, updateAbout, deleteAbout };
};

export default useAboutRequest;

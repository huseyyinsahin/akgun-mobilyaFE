import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, setHomeCard, start } from "../features/dataSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useHomeCardRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getHomeCard = async () => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`homecard`);
      dispatch(setHomeCard(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  const postHomeCard = async (homeCardData) => {
    try {
      await axiosToken.post("homecard", homeCardData);
      toastSuccessNotify("Bilgi Kartı eklendi");
      getHomeCard();
    } catch (error) {
      toastErrorNotify("Bilgi Kartı ekleme başarısız!");
    }
  };

  const updateHomeCard = async (updateData, id) => {
    try {
      await axiosToken.put(`homecard/${id}`, updateData);
      toastSuccessNotify("Bilgi Kartı güncellendi");
      getHomeCard();
    } catch (error) {
      toastErrorNotify("Bilgi Kartı güncelleme başarısız!");
    }
  };

  const deleteHomeCard = async (id) => {
    try {
      await axiosToken.delete(`homecard/${id}`);
      toastSuccessNotify("Bilgi Kartı silindi");
      getHomeCard();
    } catch (error) {
      toastErrorNotify("Bilgi Kartı silinemedi!");
    }
  };

  return { getHomeCard, postHomeCard, updateHomeCard, deleteHomeCard };
};

export default useHomeCardRequest;

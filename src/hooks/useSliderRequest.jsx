import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, setSlider, start } from "../features/dataSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useSliderRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getSlider = async () => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`slider`);
      dispatch(setSlider(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  const postSlider = async (sliderData) => {
    try {
      await axiosToken.post("slider", sliderData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toastSuccessNotify("Slider eklendi");
      getSlider();
    } catch (error) {
      toastErrorNotify("Slider ekleme başarısız!");
    }
  };

  const updateSlider = async (updateData, id) => {
    try {
      await axiosToken.put(`slider/${id}`, updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toastSuccessNotify("Slider güncellendi");
      getSlider();
    } catch (error) {
      toastErrorNotify("Slider güncelleme başarısız!");
    }
  };

  const deleteSlider = async (id) => {
    try {
      await axiosToken.delete(`slider/${id}`);
      toastSuccessNotify("Slider silindi");
      getSlider();
    } catch (error) {
      toastErrorNotify("Slider silinemedi!");
    }
  };

  return { getSlider, postSlider, deleteSlider, updateSlider };
};

export default useSliderRequest;

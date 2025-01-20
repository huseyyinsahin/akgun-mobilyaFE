import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, slider, start } from "../features/dataSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useSliderRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getSlider = async () => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`slider`);
      dispatch(slider(data));
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
      toastSuccessNotify("Slider Eklendi");
      getSlider();
    } catch (error) {
      toastErrorNotify("Slider ekleme başarısız!");
    }
  };

  return { getSlider, postSlider };
};

export default useSliderRequest;

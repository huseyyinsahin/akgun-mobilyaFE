import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, slider, start } from "../features/dataSlice";

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

  return { getSlider };
};

export default useSliderRequest;

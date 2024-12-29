import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, about, start } from "../features/dataSlice";

const useAboutRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getAbout = async () => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`about`);
      dispatch(about(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  return { getAbout };
};

export default useAboutRequest;

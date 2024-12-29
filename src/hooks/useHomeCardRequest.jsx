import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, homeCard, start } from "../features/dataSlice";

const useHomeCardRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getHomeCard = async () => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`homecard`);
      dispatch(homeCard(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  return { getHomeCard };
};

export default useHomeCardRequest;


import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, setReference, start } from "../features/dataSlice";

const useReferenceRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getReference = async () => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`reference`);
      dispatch(setReference(data));
    } catch (error) {
      dispatch(fail());
    }
  };

  return { getReference };
};

export default useReferenceRequest;

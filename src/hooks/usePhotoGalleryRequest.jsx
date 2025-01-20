import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, setPhotoGallery, start } from "../features/dataSlice";

const usePhotoGalleryRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getPhotoGallery = async (pageCount = "1") => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(
        `photogallery?page=${pageCount}&limit=21` 
      );
      dispatch(setPhotoGallery(data));
      console.log(data);
    } catch (error) {
      dispatch(fail());
    }
  };

  return { getPhotoGallery };
};

export default usePhotoGalleryRequest;

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, projects, start } from "../features/dataSlice";

const useProjectsRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getProjects = async (pageCount = "1") => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(
        `projects?page=${pageCount}&limit=1` //artıcak limit
      );
      dispatch(projects(data));
      console.log(data);
    } catch (error) {
      dispatch(fail());
    }
  };

  return { getProjects };
};

export default useProjectsRequest;

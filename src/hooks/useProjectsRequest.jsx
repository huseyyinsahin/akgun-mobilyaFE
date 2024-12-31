import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, projects, start, projectDetails } from "../features/dataSlice";

const useProjectsRequest = () => {
  const dispatch = useDispatch();
  const { axiosToken, axiosPublic } = useAxios();

  const getProjects = async (pageCount = "1") => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(
        `projects?page=${pageCount}&limit=5` //artıcak limit
      );
      dispatch(projects(data));
      console.log(data);
    } catch (error) {
      dispatch(fail());
    }
  };

  const readProjects = async (id) => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.get(`projects/${id}`);
      dispatch(projectDetails(data));
      console.log(data);
    } catch (error) {
      dispatch(fail());
    }
  };

  return { getProjects, readProjects };
};

export default useProjectsRequest;

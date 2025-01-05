import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fail,
  loginSuccess,
  logoutSuccess,
  start,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useAuthRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosToken, axiosPublic } = useAxios();

  const login = async (user) => {
    dispatch(start());
    try {
      const { data } = await axiosPublic.post(`auth/login`, user);
      dispatch(loginSuccess(data));
      navigate("/adminhome");
      toastSuccessNotify("Hoşgeldiniz");
    } catch (error) {
      dispatch(fail());
      toastErrorNotify("Giriş Başarısız!");
    }
  };

  const logout = async () => {
    try {
      await axiosToken.get("auth/logout");
      dispatch(logoutSuccess());
      navigate("/");
      toastSuccessNotify("Çıkış Yapıldı");
    } catch (error) {
      toastErrorNotify("Çıkış Başarısız!");
    }
  };

  return { login, logout };
};

export default useAuthRequest;

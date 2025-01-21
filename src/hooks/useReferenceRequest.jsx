import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fail, setReference, start } from "../features/dataSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

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

  const postReference = async (referenceData) => {
    try {
      await axiosToken.post("reference", referenceData);
      toastSuccessNotify("Referans eklendi");
      getReference();
    } catch (error) {
      toastErrorNotify("Referans ekleme başarısız!");
    }
  };

  const updateReference = async (updateData, id) => {
    try {
      await axiosToken.put(`reference/${id}`, updateData);
      toastSuccessNotify("Referans güncellendi");
      getReference();
    } catch (error) {
      toastErrorNotify("Referans güncelleme başarısız!");
    }
  };

  const deleteReference = async (id) => {
    try {
      await axiosToken.delete(`reference/${id}`);
      toastSuccessNotify("Referans silindi");
      getReference();
    } catch (error) {
      toastErrorNotify("Referans silinemedi!");
    }
  };

  return { getReference, postReference, updateReference, deleteReference };
};

export default useReferenceRequest;

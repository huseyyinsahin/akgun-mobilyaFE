import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "data",
  initialState: {
    slider: [],
    homeCard: [],
    reference: [],
    about: [],
    photoGallery: [],
    photoGalleryPages: [],
    projects: [],
    projectsPages: [],
    projectDetails: false,
    loading: "",
    error: "",
  },
  reducers: {
    start: (state) => {
      state.loading = true;
      state.error = false;
    },
    setSlider: (state, { payload }) => {
      state.slider = payload.data;
      state.loading = false;
    },
    setHomeCard: (state, { payload }) => {
      state.homeCard = payload.data;
      state.loading = false;
    },
    setReference: (state, { payload }) => {
      state.reference = payload.data;
      state.loading = false;
    },
    setAbout: (state, { payload }) => {
      state.about = payload.data;
      state.loading = false;
    },
    setPhotoGallery: (state, { payload }) => {
      state.photoGallery = payload.data;
      state.photoGalleryPages = payload.details.pages;
      state.loading = false;
    },
    setProjects: (state, { payload }) => {
      state.projects = payload.data;
      state.projectsPages = payload.details.pages;
      state.loading = false;
    },
    setProjectDetails: (state, { payload }) => {
      state.projectDetails = payload.data;
      state.loading = false;
    },
    fail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  start,
  setSlider,
  setHomeCard,
  setReference,
  setAbout,
  setPhotoGallery,
  setProjects,
  setProjectDetails,
  fail,
} = blogSlice.actions;
export default blogSlice.reducer;

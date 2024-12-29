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
    loading: "",
    error: "",
  },
  reducers: {
    start: (state) => {
      state.loading = true;
      state.error = false;
    },
    slider: (state, { payload }) => {
      state.slider = payload.data;
      state.loading = false;
    },
    homeCard: (state, { payload }) => {
      state.homeCard = payload.data;
      state.loading = false;
    },
    reference: (state, { payload }) => {
      state.reference = payload.data;
      state.loading = false;
    },
    about: (state, { payload }) => {
      state.about = payload.data;
      state.loading = false;
    },
    photoGallery: (state, { payload }) => {
      state.photoGallery = payload.data;
      state.photoGalleryPages = payload.details.pages;
      state.loading = false;
    },
    projects: (state, { payload }) => {
      state.projects = payload.data;
      state.projectsPages = payload.details.pages;
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
  slider,
  homeCard,
  reference,
  about,
  photoGallery,
  projects,
  fail,
} = blogSlice.actions;
export default blogSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  deletePost,
  getAllPost,
  getAllPostFilter,
  getOnePost,
  updatePost,
} from "../action/post";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
    onePost: {},
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPost.fulfilled, (state, { payload }) => {
        state.allPosts = payload;
        state.loading = false;
      })
      .addCase(getAllPost.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllPostFilter.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPostFilter.fulfilled, (state, { payload }) => {
        state.allPosts = payload;
        state.loading = false;
      })
      .addCase(getAllPostFilter.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getOnePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOnePost.fulfilled, (state, { payload }) => {
        state.onePost = payload;
        state.loading = false;
      })
      .addCase(getOnePost.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updatePost.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;

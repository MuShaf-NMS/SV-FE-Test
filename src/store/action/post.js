import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../api/post";

export const getAllPost = createAsyncThunk(
  "post/all",
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const res = await postApi.getAll(limit, offset);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const getAllPostFilter = createAsyncThunk(
  "post/allfilter",
  async ({ limit, offset, status }, { rejectWithValue }) => {
    try {
      const res = await postApi.getAllFilter(limit, offset, status);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await postApi.add(data);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const getOnePost = createAsyncThunk(
  "post/one",
  async (id, { rejectWithValue }) => {
    try {
      const res = await postApi.getOne(id);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const updatePost = createAsyncThunk(
  "post/update",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const res = await postApi.update(data, id);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await postApi.delete(id);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

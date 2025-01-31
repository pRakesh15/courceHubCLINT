import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../App";

//this is a action for loginUser  using thunk middleware  for make api call's..

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email, password);
    try {
      const { data } = await axios.post(
        `${server}/LoginUser`,
        { email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//create a action for get user...
export const getMyProfile = createAsyncThunk(
  "getMyProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${server}/getMyProfile`,

        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//create a action for logout user

export const logOutUser = createAsyncThunk(
  "logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${server}/logOut`,

        {
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//create a action for signup user...

export const registerUser = createAsyncThunk(
  "registerUser",
  async (formData, { rejectWithValue }) => {
    console.log(formData);
    try {
      const { data } = await axios.post(`${server}/createUser`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//action for update profile like email and name

export const updateNameEmail = createAsyncThunk(
  "updateNameEmail",
  async ({ name, email }, { rejectWithValue }) => {
    console.log(name, email);
    try {
      const { data } = await axios.put(
        `${server}/updateProfileDetails`,
        { newName: name, newEmail: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//create a action for change password...

export const changePassword = createAsyncThunk(
  "changePassword",
  async ({ oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${server}/changePassword`,
        { oldPassword, newPassword},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

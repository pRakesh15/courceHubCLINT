import { createSlice } from "@reduxjs/toolkit";
import { getMyProfile, loginUser, logOutUser } from "../actions/userAction";

// export const server = "https://coursehubserver.onrender.com/api/v1";
export const server = "http://localhost:8090/api/v1";
//declare a initialState  for the user slice  
const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
};



//create a slice which avoid  manually define action types and action creators. and this is the state for the user reducer
const userDetailSlice = createSlice ({
  name: "userDetailSlice",
  initialState,
  extraReducers: (builder) => {
    //add some cases like pending fulfill and failed....
    builder
    //this is for login user....
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
        state.message = null;
      })

      //this is for fetch the login user info..
      //if the user fetch successfully  then it will store inside the state..
      .addCase(getMyProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(getMyProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
        state.message = null;
      })

      //this is for fetch user state after  logout

      .addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = action.payload;
        state.message = null;
      });
  },
});

export default userDetailSlice.reducer;

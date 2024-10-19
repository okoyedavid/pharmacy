import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  schoolInfo: [],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      state.userInfo = action.payload.userInfo;
      state.schoolInfo = action.payload.schoolInfo;
      localStorage.setItem("state", JSON.stringify(action.payload));
    },
    logOut(state) {
      state.schoolInfo = [];
      state.schoolInfo = [];
      localStorage.removeItem("state");
    },
  },
});

export const { getUser, logOut } = user.actions;
export default user.reducer;

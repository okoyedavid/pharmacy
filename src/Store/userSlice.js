import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid: null,
  userInfo: {
    email: "",
    name: "",
    currentLevel: "",
  },
  semester: "",
  status: "",
  profileImg: "",
  role: "",
  level: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.userid = payload.id;
      state.userInfo.email = payload.email;
      state.userInfo.name = payload.name;
      state.userInfo.currentLevel = payload.currentLevel;
      state.semester = "firstSemester";
      state.profileImg = payload.profileImg;
      state.status = payload.status;
      state.role = payload.role;
      state.level = state.userInfo.currentLevel;
    },

    setLevel(state, { payload }) {
      state.level = payload;
    },
  },
});

export const { setUser, setLevel } = userSlice.actions;
export default userSlice.reducer;

export const selectIsUserAuthenticated = (state) => Boolean(state.user.userid);
export const selectRole = (state) => state.user.role;
export const selectUser = (state) => state.user;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid: null,
  userInfo: {
    email: "",
    name: "",
    location: "",
    bio: "",
    dateofbirth: "",
    state: "",
    quote: "",
    currentLevel: "",
    profileImg: "",
  },

  semester: "",
  status: "",
  positionHeld: "",
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
      state.userInfo.profileImg = payload.profileImg;
      state.status = payload.status;
      state.role = payload.role;
      state.level = state.userInfo.currentLevel;
    },

    setLevel(state, { payload }) {
      state.level = payload;
    },

    updateUserInfo(state, { payload }) {
      state.userInfo.name = payload.name;
      state.userInfo.currentLevel = payload.level;
      state.userInfo.quote = payload.quote;
      state.userInfo.location = payload.location;
      state.userInfo.bio = payload.bio;
      state.userInfo.dateofbirth = payload.date;
      state.userInfo.profileImg = payload.avatar || state.userInfo.profileImg;
      state.level = state.userInfo.currentLevel;
    },
  },
});

export const { setUser, setLevel, updateUserInfo } = userSlice.actions;
export default userSlice.reducer;

export const selectIsUserAuthenticated = (state) => Boolean(state.user.userid);
export const selectRole = (state) => state.user.role;
export const selectUser = (state) => state.user;

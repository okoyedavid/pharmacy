import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  schoolInfo: [],
  semester: {
    session: "",
    subjects: [],
  },
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      state.userInfo = action.payload.userInfo;
      state.schoolInfo = action.payload.schoolInfo;
    },
    logOut(state) {
      state.schoolInfo = [];
      state.schoolInfo = [];
      state.semester = "";
    },

    getSemester(state, { payload }) {
      state.semester.session = payload.semester;
      state.semester.subjects = payload.subjects;
    },
  },
});

export const { getUser, logOut, getSemester } = user.actions;
export default user.reducer;

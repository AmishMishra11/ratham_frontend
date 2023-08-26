import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userAge: 0,
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserName: (state, action) => {
      state.userName = action.payload;
    },

    addUserAge: (state, action) => {
      state.userAge = action.payload;
    },

    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { addUserName, addUserAge, addUser } = userSlice.actions;

export default userSlice.reducer;

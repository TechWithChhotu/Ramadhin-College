import { createSlice } from "@reduxjs/toolkit";

/*----------------->>initialState<<-----------------*/
const initialState = { login: false, data: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /*----------------->>login<<-----------------*/
    login(state, action) {
      state.login = true;
      state.data = action.payload;
    },

    /*----------------->>logout<<-----------------*/
    logout(state, action) {
      state.login = false;
      state.data = null;
    },

    setData(state, action) {
      state.data = action.payload;
      // todo--> forBackend
    },

    deleteUser(state, action) {
      state.data = null;
      // todo--> forBackend
    },
  },
});

export const { login, logout, setData } = authSlice.actions;
export default authSlice.reducer;

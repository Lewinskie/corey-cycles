import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userCart: (state, action) => {
      state.push(action.payload);
    },
    userDetails: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { userCart, userDetails } = usersSlice.actions;
export default usersSlice.reducer;

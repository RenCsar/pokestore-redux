import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const seearchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    changeSearch: (state, { payload }) => payload,
    resetSearch: (state) => initialState,
  },
});

export const { changeSearch, resetSearch } = seearchSlice.actions;
export default seearchSlice.reducer;

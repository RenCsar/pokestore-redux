import { createSlice } from "@reduxjs/toolkit";
import { pokemonTypes } from "../../util/PokemonTypes";

const initialState = pokemonTypes;

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
});

export default categorySlice.reducer;

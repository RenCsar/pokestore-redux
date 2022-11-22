import { createSlice } from "@reduxjs/toolkit";
import { pokemon } from "../../util/PokemonList";

const initialState = pokemon;

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  reducers: {
    changeFavorite: (state, { payload }) => {
      state = state.map((item) => {
        if (item.id === payload) item.favorito = !item.favorito;
        return item;
      });
    },
  },
});

export const { changeFavorite } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;

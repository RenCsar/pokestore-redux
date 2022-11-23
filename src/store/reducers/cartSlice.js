import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addPokemonToCard: (state, { payload }) => {
      const pokemon = state.find((pokemon) => pokemon.id === payload.id);
      if (pokemon) {
        pokemon.count++;
      } else {
        return [
          ...state,
          {
            count: 1,
            ...payload,
          },
        ];
      }
    },
    addPokemonCount: (state, { payload }) => {
      const pokemon = state.find((pokemon) => pokemon.id === payload.id);
      if (pokemon) {
        pokemon.count++;
      }
    },
    removePokemonCount: (state, { payload }) => {
      const pokemon = state.find((pokemon) => pokemon.id === payload.id);
      if (pokemon) {
        if (pokemon.count <= 0) {
          return state.filter((pokemon) => pokemon.id !== payload.id);
        } else {
          pokemon.count--;
        }
      }
    },
    resetCart: () => initialState,
  },
});

export const { addPokemonToCard, addPokemonCount, removePokemonCount } =
  cartSlice.actions;
export default cartSlice.reducer;

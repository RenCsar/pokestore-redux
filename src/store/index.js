import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categorySlice";
import pokemonsReducer from "./reducers/pokemonsSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    pokemons: pokemonsReducer,
  },
});

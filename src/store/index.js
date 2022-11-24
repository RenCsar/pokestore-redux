import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categorySlice";
import pokemonsReducer from "./reducers/pokemonsSlice";
import searchReducer from "./reducers/searchSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    pokemons: pokemonsReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

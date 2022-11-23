import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardPokemon } from "../../components/cardPokemon";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { changeFavorite } from "../../store/reducers/pokemonsSlice";
import { addPokemonToCard } from "../../store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

export const Categoria = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const cart = useSelector((state) => state.cart);
  const { tipo } = params;
  const navigate = useNavigate();

  const filteredPokemon = pokemons.filter((p) => {
    return p.type.map((t) => t.toLowerCase()).includes(tipo.toLowerCase());
  });

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent="center"
      gap={3}
      py={10}
    >
      {filteredPokemon.map((pokemon) => {
        return (
          <CardPokemon
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => {
              dispatch(changeFavorite(pokemon.id));
            }}
            addToCart={() => {
              navigate("/carrinho");
              dispatch(addPokemonToCard(pokemon));
            }}
          />
        );
      })}
    </Box>
  );
};

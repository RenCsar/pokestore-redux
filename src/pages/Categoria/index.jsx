import React from "react";
import { useParams } from "react-router-dom";
import { CardPokemon } from "../../components/cardPokemon";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { changeFavorite } from "../../store/reducers/pokemonsSlice";

export const Categoria = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const { tipo } = params;

  const filteredPokemon = pokemons.filter((p) => {
    return p.type.map((t) => t.toLowerCase()).includes(tipo.toLowerCase());
  });

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
          />
        );
      })}
    </Box>
  );
};

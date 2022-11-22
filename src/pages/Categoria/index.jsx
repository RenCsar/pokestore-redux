import React from "react";
import { useParams } from "react-router-dom";
import { pokemon } from "../../util/PokemonList";
import { linkImagem } from "../../util/PokemonList";
import { CardPokemon } from "../../components/cardPokemon";
import { Box } from "@chakra-ui/react";

export const Categoria = () => {
  const params = useParams();
  const { tipo } = params;

  const filteredPokemon = pokemon.filter((p) => {
    return p.type.map((t) => t.toLowerCase()).includes(tipo.toLowerCase());
  });

  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent="center" gap={3} py={10}>
      {filteredPokemon.map((pokemon) => {
        return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </Box>
  );
};

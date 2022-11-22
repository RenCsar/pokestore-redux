import React from 'react'
import { useParams } from 'react-router-dom';
import { pokemon } from '../../util/PokemonList';
import { linkImagem } from "../../util/PokemonList";
import { CardPokemon } from '../../components/cardPokemon';

export const Categoria = () => {
  const params = useParams();
  const { tipo } = params;

  const filteredPokemon = pokemon.filter((p) => {
    return p.type.map((t) => t.toLowerCase()).includes(tipo.toLowerCase());
  });

  return (
    <>
      <CardPokemon />
    </>
  )
}

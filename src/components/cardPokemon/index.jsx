import React from "react";
import { Box, Button, Image, Tag, Text } from "@chakra-ui/react";
import { linkImagem } from "../../util/PokemonList";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { bounce } from "../../styled.emotion";
import Tilt from "react-parallax-tilt";

export const CardPokemon = ({ pokemon, onClick, addToCart }) => {
  return (
    <Box
      w={"230px"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      flexDirection={"column"}
      borderRadius={10}
      boxShadow="xl"
      animation={`${bounce} .5s ease forwards`}
      opacity={0}
    >
      <Tag
        variant="solid"
        colorScheme="teal"
        display={"flex"}
        justifyContent={"center"}
        borderRadius={0}
        borderTopRadius={10}
      >
        {pokemon.name.english}
      </Tag>
      <Tilt>
        <Image src={`${linkImagem}/${pokemon.id}.png`} />
      </Tilt>
      <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={1} p={2}>
        <Tag variant="solid" colorScheme="teal">
          <strong>HP</strong>: {pokemon.base.HP}
        </Tag>
        <Tag variant="solid" colorScheme="teal">
          <strong>Atk</strong>: {pokemon.base.Attack}
        </Tag>
        <Tag variant="solid" colorScheme="teal">
          <strong>Def</strong>: {pokemon.base.Defense}
        </Tag>
        <Tag variant="solid" colorScheme="teal">
          <strong>Sp. Atk</strong>: {pokemon.base["Sp. Attack"]}
        </Tag>
        <Tag variant="solid" colorScheme="teal">
          <strong>Sp. Def</strong>: {pokemon.base["Sp. Defense"]}
        </Tag>
        <Tag variant="solid" colorScheme="teal">
          <strong>Speed</strong>: {pokemon.base.Speed}
        </Tag>
      </Box>
      <Box
        py={2}
        display={"flex"}
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        p={2}
      >
        {pokemon.favorito ? (
          <AiFillHeart
            cursor="pointer"
            size={22}
            fill={"red"}
            onClick={onClick}
          />
        ) : (
          <AiOutlineHeart
            cursor="pointer"
            size={22}
            fill={"red"}
            onClick={onClick}
          />
        )}
        <Tag variant="solid" colorScheme="telegram" py={2}>
          <Text>
            <strong>R$</strong> {pokemon.price}
          </Text>
        </Tag>
        <Button onClick={addToCart}>
          <MdAddShoppingCart
            size={22}
            fill="var(--chakra-colors-telegram-500)"
          />
        </Button>
      </Box>
    </Box>
  );
};

import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Banner } from "../../components/banner";
import { Card } from "../../components/card";
import { pokemonTypes } from "../../util/PokemonTypes";
import { useSelector } from "react-redux";

export const Home = () => {
  const pokeType = useSelector((state) => state.category);

  return (
    <Box>
      <Banner />
      <Container maxW="1100px">
        <Box
          display={"flex"}
          flexWrap="wrap"
          gap={2}
          justifyContent="center"
          alignItems="center"
          p={3}
          my={5}
        >
          {pokeType.map((type) => {
            return (
              <Card
              key={type.name}
                type={type.name}
                image={type.image}
                to={`/categoria/${type.name}`}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

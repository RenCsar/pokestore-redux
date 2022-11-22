import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";
import batalhaPokemon from "../../assets/batalhar-pokemon.jpg";
import logo from "../../assets/pokestore-logo.png";

export const Banner = () => {
  return (
    <Box
      bgImage={batalhaPokemon}
      objectFit={"cover"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      bgPosition={"center"}
    >
      <Image src={logo} w={"50%"} />
    </Box>
  );
};

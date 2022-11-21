import React from "react";
import { Box, Input, Image, Container, Button, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import pokeStoreLogo from "../../assets/pokestore-logo.png";

export const Header = () => {
  return (
    <Box w="100%" bg="gray.100">
      <Container
        display="flex"
        alignItems="center"
        maxW="1280px"
        justifyContent="space-between"
      >
        <Image
          w={140}
          objectFit="cover"
          src={pokeStoreLogo}
          alt="Logo PokeStore escrito PokeStore"
        />
        <Box display="flex" gap={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch size={32} fill="var(--chakra-colors-telegram-500)" />}
            />
            <Input borderColor="var(--chakra-colors-telegram-500)" type="search" placeholder="Pesquisar" />
          </InputGroup>
          <Button colorScheme="telegram">
            <AiOutlineShoppingCart size={32} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
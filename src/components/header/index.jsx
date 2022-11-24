import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Image,
  Container,
  Button,
  InputGroup,
  InputLeftElement,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tag,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import pokeStoreLogo from "../../assets/pokestore-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { linkImagem } from "../../util/PokemonList";

export const Header = () => {
  const location = useLocation();
  const pokemons = useSelector((state) => state.pokemons);
  const [searchValue, setSearchValue] = useState();
  const [pokemonFilter, setPokemonFilter] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);

    const result = pokemons.filter((pokemon) => {
      return pokemon.name.english.includes(searchValue);
    });

    setPokemonFilter(result);
  };

  return (
    <Box w="100%" bg="gray.100">
      <Container
        display="flex"
        alignItems="center"
        maxW="1280px"
        justifyContent="space-between"
      >
        <Link to="/">
          <Image
            w={140}
            objectFit="cover"
            src={pokeStoreLogo}
            alt="Logo PokeStore escrito PokeStore"
          />
        </Link>
        <Box display="flex" gap={2} position="relative">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <AiOutlineSearch
                  size={32}
                  fill="var(--chakra-colors-telegram-500)"
                />
              }
            />
            <Input
              borderColor="var(--chakra-colors-telegram-500)"
              type="search"
              placeholder="Pesquisar"
              onChange={handleChange}
              zIndex="9999"
            />
            <Box
              position="absolute"
              top="45px"
              w="100%"
              right="0"
              zIndex="9998"
              maxW={600}
              bg="#319795"
              maxH={300}
              overflowY="auto"
              borderRadius={10}
              shadow="md"
              border="1px solid white"
              color="white"
            >
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box display="flex" flex="1" alignItems="center">
                        {/* <Image w={16} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" /> */}
                        Charizard
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box display="flex" flexDirection="column">
                      <Image w="100%" src={`${linkImagem}/${6}.png`} />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </InputGroup>
          <Link to={"/carrinho"}>
            <Button colorScheme="telegram">
              <AiOutlineShoppingCart size={32} />
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

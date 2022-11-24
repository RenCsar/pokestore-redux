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
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import pokeStoreLogo from "../../assets/pokestore-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { linkImagem } from "../../util/PokemonList";
import { MdAddShoppingCart } from "react-icons/md";
import { changeFavorite } from "../../store/reducers/pokemonsSlice";
import { addPokemonToCard } from "../../store/reducers/cartSlice";

export const Header = () => {
  const location = useLocation();
  const pokemons = useSelector((state) => state.pokemons);
  const [searchValue, setSearchValue] = useState(null);
  const [pokemonFilter, setPokemonFilter] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const result = pokemons.filter((pokemon) => {
    return pokemon.name.english.toLowerCase().includes(searchValue);
  });

  const handleSearch = () => {
    if (searchValue.toString().length <= 3) {
      toast({
        title: "Cuidado!",
        position: "top-left",
        description: "É necessário, no mínimo, 3 caracteres.",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    } else {
      setPokemonFilter(result);

      if(!pokemonFilter)  {
        console.log("não encontrado")
      }
    }
  };

  useEffect(() => {
    setPokemonFilter(result);
  }, [pokemons]);

  const dispatchChangeFavorite = (pokemon) => {
    dispatch(changeFavorite(pokemon.id));
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
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
              zIndex="9999"
            />

            {searchValue != "" ? (
              <Box>
                <Button
                  onClick={handleSearch}
                  colorScheme="teal"
                  leftIcon={<AiOutlineSearch size={32} fill="white" />}
                  ml={2}
                >
                  Buscar
                </Button>
                <Box
                  position="absolute"
                  top="45px"
                  w="100%"
                  right="0"
                  zIndex="9998"
                  maxW={600}
                  bg="#319795"
                  maxH={350}
                  overflowY="auto"
                  borderRadius={10}
                  shadow="md"
                  border="1px solid white"
                  color="white"
                >
                  <Accordion>
                    {pokemonFilter &&
                      pokemonFilter.map((pokemon) => {
                        return (
                          <AccordionItem key={pokemon.name.english}>
                            <h2>
                              <AccordionButton>
                                <Box
                                  display="flex"
                                  flex="1"
                                  alignItems="center"
                                >
                                  {pokemon.name.english}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              pb={4}
                              display="flex"
                              alignItems="center"
                            >
                              <Box display="flex">
                                <Image
                                  w="100%"
                                  maxW="200px"
                                  src={`${linkImagem}/${pokemon.id}.png`}
                                />
                              </Box>
                              <Box
                                py={2}
                                display={"flex"}
                                flexDir="column"
                                alignItems={"center"}
                                gap={2}
                                justifyContent={"space-between"}
                                p={2}
                              >
                                <Box display="flex" flexDir="column" gap={2}>
                                  <Tag
                                    cursor="pointer"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    w="100%"
                                    py={1}
                                    onClick={() =>
                                      dispatchChangeFavorite(pokemon)
                                    }
                                  >
                                    {pokemon.favorito ? (
                                      <AiFillHeart
                                        cursor="pointer"
                                        size={26}
                                        fill={"red"}
                                      />
                                    ) : (
                                      <AiOutlineHeart
                                        cursor="pointer"
                                        size={26}
                                        fill={"red"}
                                      />
                                    )}
                                  </Tag>
                                  <Tag
                                    variant="solid"
                                    colorScheme="telegram"
                                    py={2}
                                  >
                                    <Text>
                                      <strong>R$</strong> {pokemon.price}
                                    </Text>
                                  </Tag>
                                  <Button
                                    onClick={() => {
                                      setSearchValue("");
                                      navigate("/carrinho");
                                      dispatch(addPokemonToCard(pokemon));
                                    }}
                                  >
                                    <MdAddShoppingCart
                                      size={20}
                                      fill="var(--chakra-colors-telegram-500)"
                                    />
                                  </Button>
                                </Box>
                              </Box>
                            </AccordionPanel>
                          </AccordionItem>
                        );
                      })}
                  </Accordion>
                </Box>
              </Box>
            ) : (
              <></>
            )}
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

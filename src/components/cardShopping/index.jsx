import {
  Box,
  Tag,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { linkImagem } from "../../util/PokemonList";
import {
  addPokemonCount,
  removePokemonCount,
} from "../../store/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeFavorite } from "../../store/reducers/pokemonsSlice";

export const CardShopping = ({ pokemon }) => {
  const [test, setTeste] = useState(pokemon);
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemons);
  const filteredPokemon = pokemonState.filter(
    (poke) => poke.name.english === pokemon.name.english
  );

  useEffect(() => {
    setTeste(filteredPokemon);
    console.log(test);
  }, [pokemonState]);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="contain"
        maxW={{ base: "100%", sm: "250px" }}
        src={`${linkImagem}/${pokemon.id}.png`}
        alt="Caffe Latte"
      />

      <Stack w="100%">
        <CardBody>
          <Heading size="md" p={2}>
            {pokemon.name.english}
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gap={2}
            p={2}
            mt={3}
          >
            <Tag variant="solid" colorScheme="teal" fontSize="18px" py={2}>
              <strong>HP</strong>: {pokemon.base.HP}
            </Tag>
            <Tag variant="solid" colorScheme="teal" fontSize="18px" py={2}>
              <strong>Atk</strong>: {pokemon.base.Attack}
            </Tag>
            <Tag variant="solid" colorScheme="teal" fontSize="18px" py={2}>
              <strong>Def</strong>: {pokemon.base.Defense}
            </Tag>
            <Tag variant="solid" colorScheme="teal" fontSize="18px" py={2}>
              <strong>Sp. Atk</strong>: {pokemon.base["Sp. Attack"]}
            </Tag>
            <Tag variant="solid" colorScheme="teal" fontSize="18px" py={2}>
              <strong>Sp. Def</strong>: {pokemon.base["Sp. Defense"]}
            </Tag>
            <Tag variant="solid" colorScheme="teal" fontSize="18px" py={2}>
              <strong>Speed</strong>: {pokemon.base.Speed}
            </Tag>
          </Box>
        </CardBody>

        <CardFooter w={"100%"} display="flex">
          <Box
            py={2}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            justifyContent={"space-between"}
            p={2}
            w="100%"
          >
            <Tag variant="solid" colorScheme="telegram" py={2}>
              <Text fontSize={"18px"}>
                <strong>R$</strong> {pokemon.price}
              </Text>
            </Tag>
            <Box display="flex" gap={3} alignItems="center">
              {test[0]?.favorito ? (
                <AiFillHeart
                  cursor="pointer"
                  size={32}
                  fill={"red"}
                  onClick={() => {
                    dispatch(changeFavorite(pokemon.id));
                  }}
                />
              ) : (
                <AiOutlineHeart
                  cursor="pointer"
                  size={32}
                  fill={"red"}
                  onClick={() => {
                    dispatch(changeFavorite(pokemon.id));
                  }}
                />
              )}
              <Button
                colorScheme={pokemon.count == 0 ? `red` : `telegram`}
                h="35px"
                onClick={() => dispatch(removePokemonCount(pokemon))}
              >
                {pokemon.count == 0 ? `Remover` : `-`}
              </Button>
              <Text>{pokemon.count}</Text>
              <Button
                colorScheme="telegram"
                w="35px"
                h="35px"
                onClick={() => dispatch(addPokemonCount(pokemon))}
              >
                +
              </Button>
            </Box>
          </Box>
        </CardFooter>
      </Stack>
    </Card>
  );
};

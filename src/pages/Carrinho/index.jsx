import { Button, Card, CardBody, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { CardShopping } from "../../components/cardShopping";

export const Carrinho = () => {
  const cart = useSelector((state) => state.cart);

  const values = cart.map((pokemon) => {
    return pokemon.price * pokemon.count;
  });

  const subtotal = values.length > 0 ? values.reduce((soma, i) => soma + i) : 0;

  return (
    <Container maxW="1100px" pt={5}>
      {cart.map((pokemon) => {
        return <CardShopping key={pokemon.id} pokemon={pokemon} />;
      })}
      <Card display="grid" my={5} gridTemplateColumns={"1fr 1fr"}>
        <CardBody fontSize="20px">
          <Text>Resumo da compra</Text>
          <Text>
            {`Subtotal: `}
            <strong>
              R$
              {subtotal.toLocaleString("pt-br", {
                currency: "BRL",
              })}
            </strong>
          </Text>
        </CardBody>
        <Button
          fontSize="20px"
          colorScheme="telegram"
          alignSelf="center"
          justifySelf="flex-end"
          mr="20px"
        >
          Finalizar Compra
        </Button>
      </Card>
    </Container>
  );
};

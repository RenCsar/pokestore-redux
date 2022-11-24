import { Button, Card, CardBody, Container, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardShopping } from "../../components/cardShopping";

export const Carrinho = () => {

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const values = cart.map((pokemon) => {
    return pokemon.price * pokemon.count;
  });

  const subtotal = values.length > 0 ? values.reduce((soma, i) => soma + i) : 0;

  return (
    <Container maxW="1100px" pt={5}>
      {cart.length == 0? (
        <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        p={5}
        display='flex'
        justifyContent='center'
      > <Text fontSize='18px'>Nenhum item no carrinho</Text>
      </Card>
      ): (cart.map((pokemon) => {
        return <CardShopping key={pokemon.id} pokemon={pokemon} />;
      }))}
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
          onClick={()=> cart.length == 0? null : navigate('/recibo', {state: {
            subtotal: subtotal,
            cart: cart
          }}) }  
        >
          Finalizar Compra
        </Button>
      </Card>
    </Container>
  );
};

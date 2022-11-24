import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CardPurchase } from "../../components/cardPurchase";
import { useDispatch } from "react-redux";
import { resetCart } from "../../store/reducers/cartSlice";

export const Purchase = () => {
  const { state } = useLocation();
  const { subtotal, cart } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, []);

  return (
    <Box display="flex" flexDirection="column" px="250px" py="50px">
      <Text textAlign="center" mb={10} fontSize="30px">
        Obrigado pela compra!
      </Text>

      {cart.map((pokemon) => {
        return <CardPurchase key={pokemon.id} pokemon={pokemon} />;
      })}

      <Card display="flex" my={5}>
        <CardBody fontSize="25px" display="flex" justifyContent="flex-end">
          <Text>
            {`Total: `}
            <strong>
              {`R$ `}
              {subtotal.toLocaleString("pt-br", {
                currency: "BRL",
              })}
            </strong>
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

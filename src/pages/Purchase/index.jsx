import { Box, Card, CardBody, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CardPurchase } from '../../components/cardPurchase'

export const Purchase = () => {
  const {state} = useLocation()
  const {subtotal, cart} = state
  console.log(subtotal);
  console.log(cart);

  return (
    <Box display='flex' flexDirection='column' px='250px' py="50px">
        <Text textAlign='center' mb={10} fontSize='30px'>Obrigado pela compra!</Text>

        {cart.map((pokemon) => {
          return <CardPurchase key={pokemon.id} pokemon={pokemon} />;
        })}

        <Card display="flex" my={5}> 
          <CardBody fontSize="25px" display='flex' justifyContent='flex-end'>
            <Text></Text>
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
  )
}
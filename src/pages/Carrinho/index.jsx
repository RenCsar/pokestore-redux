import { Button, Card, CardBody, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { CardShopping } from '../../components/cardShopping'

export const Carrinho = () => {
  return (
    <Container maxW="1100px" pt={5}>
      <CardShopping />            
        <Card display='grid' my={5} gridTemplateColumns={'1fr 1fr'}>
          <CardBody fontSize='20px'>
            <Text>Resumo da compra</Text>
            <Text>Subtotal: <strong>R${' 2504,52'}</strong></Text>            
          </CardBody>
          <Button fontSize='20px' colorScheme='telegram' alignSelf='center' justifySelf='flex-end' mr='20px'>Finalizar Compra</Button>
        </Card>
    </Container>
  )
}
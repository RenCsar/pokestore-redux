import { Button, Center, Container, Image } from '@chakra-ui/react';
import React from 'react';
import notFound from '../../assets/not.png'
import { Link } from 'react-router-dom';

export const Error = () => {
  return (    
        <Center minH={'100vh'} flexDirection='column' bg="gray.100">
            <Image src={notFound}/>
            <Button as={Link} to="/" bg='#a0578c' color="white" _hover={{bg:'#7c508a', transform: 'scale(1.01)'}}>Voltar para Início</Button>
        </Center>
  )
}
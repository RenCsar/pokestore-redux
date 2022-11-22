import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import bgCard from '../../assets/bg-card.png'


export const Card = ({image, type, to="/"}) => {
  return (
    <>
      <Link to={to}>
        <Box h={'200px'} w={'180px'}  display={'flex'} justifyContent={'center'} alignContent={'center'} flexDirection={'column'} borderRadius={'5px'} bgImage={bgCard}>
            <Center>
                <Image src={image} w={'100px'} h={'100px'}/>
            </Center>    
            <Text textAlign={'center'} color={'white'}>{type}</Text>
        </Box>
      </Link>
    </>
  )
}
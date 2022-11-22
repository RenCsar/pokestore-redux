import { Box, Tag, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const CardShopping = (pokemon) => {
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '250px' }}
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png'
            alt='Caffe Latte'
        />

        <Stack w='100%'>
            <CardBody>
                <Heading size='md' p={2}>The perfect latte</Heading>

                <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={2} p={2} mt={3} >
                    <Tag variant="solid" colorScheme="teal" fontSize='18px' py={2}>
                        <strong>HP</strong>: {'pokemon.base.HP'}
                    </Tag>
                    <Tag variant="solid" colorScheme="teal" fontSize='18px' py={2}>
                        <strong>Atk</strong>: {'pokemon.base.Attack'}
                    </Tag>
                    <Tag variant="solid" colorScheme="teal" fontSize='18px' py={2}>
                        <strong>Def</strong>: {'pokemon.base.Defense'}
                    </Tag>
                    <Tag variant="solid" colorScheme="teal" fontSize='18px' py={2}>
                        <strong>Sp. Atk</strong>: {'pokemon.base["Sp. Attack"]'}
                    </Tag>
                    <Tag variant="solid" colorScheme="teal" fontSize='18px' py={2}>
                        <strong>Sp. Def</strong>: {'pokemon.base["Sp. Defense"]'}
                    </Tag>
                    <Tag variant="solid" colorScheme="teal" fontSize='18px' py={2}>
                        <strong>Speed</strong>: {'pokemon.base.Speed'}
                    </Tag>
                </Box>
            </CardBody>

            <CardFooter w={'100%'} display='flex'>
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
                        <Text fontSize={'18px'}>
                        <strong>R$</strong> {98894}
                        </Text>
                    </Tag>
                    <Box display='flex' gap={3} alignItems='center'> 
                        {pokemon.favorito ? (
                            <AiFillHeart cursor="pointer" size={32} fill={"red"} />
                        ) : (
                            <AiOutlineHeart cursor="pointer" size={32} fill={"red"}  />
                        )}                    
                        <Button colorScheme='telegram'  w='35px' h='35px'>-</Button>
                        <Text>01</Text>
                        <Button colorScheme='telegram'  w='35px' h='35px'>+</Button>
                    </Box>
                </Box>
            </CardFooter>
        </Stack>
    </Card>
  )
}

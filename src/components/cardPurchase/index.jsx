import { Box, Card, CardBody, CardFooter, Heading, Image, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react';

export const CardPurchase = ({pokemon}) => {
  return (
    <Card
    direction={{ base: "column", sm: "row" }}
    overflow="hidden"
    variant="outline"
    >
        <Stack w="100%">
            <CardBody>
                <Heading size="md" p={2}>
                    {pokemon.name.english}
                </Heading>
            </CardBody>
            <CardFooter w={"100%"} display="flex">
                <Box                
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
                >
                    <Tag>
                        <Text fontSize={"18px"}>Preço por unidade R$ {pokemon.price}
                        </Text>
                    </Tag>
                    <Box display="flex" gap={3} alignItems="center">
                        <Tag>          
                            <Text fontSize={"18px"}> {`Quantidade: ${pokemon.count}`}</Text>
                        </Tag>
                    </Box>
                    <Box display="flex" gap={3} alignItems="center">
                        <Tag>       
                            <Text fontSize={"18px"}>{`Total item: R$ ${(pokemon.price * pokemon.count).toLocaleString("pt-br", {
                            currency: "BRL",
                            })}`}</Text>
                        </Tag>
                    </Box>
                </Box>
            </CardFooter>
        </Stack>
    </Card>
  )
}
import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import bgCard from "../../assets/bg-card.png";
import Tilt from 'react-parallax-tilt';


export const Card = ({ image, type, to = "/" }) => {
  return (
    <Tilt>
      <Link to={to}>
        <Box
          h={"200px"}
          w={"180px"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"column"}
          borderRadius={10}
          bgImage={bgCard}
          boxShadow='xl'
        >
          <Center>
            <Image
              borderRadius={"50%"}
              border="2px solid white"
              src={image}
              w={"100px"}
              h={"100px"}
            />
          </Center>
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize="2xl"
            textTransform="capitalize"
            mt={2}
          >
            {type}
          </Text>
        </Box>
      </Link>
    </Tilt>
  );
};

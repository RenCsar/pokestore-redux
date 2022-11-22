import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Banner } from "../../components/banner";
import { Card } from "../../components/card";

export const Home = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Banner />
      <Container maxW="1280px">
          <Box display={'grid'} gridTemplateColumns={'repeat(auto-fit, minmax(170px, 1fr))'} gap={2} placeItems={'center'} p={3} my={5}>
            <Card type={'water'} image={"https://archives.bulbagarden.net/media/upload/9/95/Normal_icon_SwSh.png"} to={'/categoria/water'}/>
          </Box>
        </Container>
    </Box>
  );
};

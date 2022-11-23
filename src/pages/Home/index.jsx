import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Banner } from "../../components/banner";
import { Card } from "../../components/card";
import { useSelector } from "react-redux";

export const Home = () => {
  const categories = useSelector((state) => state.category);

  return (
    <Box>
      <Banner />
      <Container maxW="1100px">
        <Box
          display={"flex"}
          flexWrap="wrap"
          gap={2}
          justifyContent="center"
          alignItems="center"
          p={3}
          my={5}
        >
          {categories.map((category) => {
            return (
              <Card
              key={category.name}
                type={category.name}
                image={category.image}
                to={`/categoria/${category.name}`}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

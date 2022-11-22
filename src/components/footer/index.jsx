import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <Box w="100%" bg="gray.100" py={5}>
      <Container
        display="flex"
        alignItems="center"
        maxW="1280px"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap={2}>
          <FaFacebookSquare
            size={32}
            fill="var(--chakra-colors-telegram-500)"
            cursor="pointer"
          />
          <FaTwitterSquare
            size={32}
            fill="var(--chakra-colors-telegram-500)"
            cursor="pointer"
          />
          <FaInstagramSquare
            size={32}
            fill="var(--chakra-colors-telegram-500)"
            cursor="pointer"
          />
        </Box>
        <Box>
            <Text fontSize='xl'>Desenvolvido por: <strong>Daniel</strong> e <strong>Renan</strong></Text>
        </Box>
      </Container>
    </Box>
  );
};

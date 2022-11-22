import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Carrinho } from "../pages/Carrinho";
import { Categoria } from "../pages/Categoria";
import { Home } from "../pages/Home";
import { Provider } from "react-redux";
import { store } from "../store";

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <Box
            bg="gray.50"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            minH="100vh"
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/categoria/:tipo" element={<Categoria />} />
            </Routes>
            <Footer />
          </Box>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;

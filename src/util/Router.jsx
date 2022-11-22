import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { Carrinho } from "../pages/Carrinho";
import { Home } from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default Router;

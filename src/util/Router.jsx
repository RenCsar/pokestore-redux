import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carrinho } from "../pages/Carrinho";
import { Categoria } from "../pages/Categoria";
import { Home } from "../pages/Home";
import { Provider } from "react-redux";
import { store } from "../store";
import { DefaultPages } from "../components/DefaultPages";
import { Error } from "../pages/Error";

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>            
            <Routes>
              <Route path="/" element={<DefaultPages />}>                
                <Route index element={<Home />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/categoria/:tipo" element={<Categoria />} />
              </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;
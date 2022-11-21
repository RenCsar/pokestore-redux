import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<div>Teste</div>}/>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default Router;

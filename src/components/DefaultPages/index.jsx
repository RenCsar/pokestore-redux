import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Footer } from "../footer"
import { Header } from "../header"


export const DefaultPages = () => {
  return (    
    <Box 
    bg="gray.50"
    display="flex"
    flexDir="column"
    justifyContent="space-between"
    minH="100vh">
        <Header />
        <Outlet />            
        <Footer />
    </Box> 
  )
}

import { ChakraProvider } from '@chakra-ui/react'
import { TaxesContextProvider } from '@/context'
import { Home } from '@/pages'

function App () {
  return (
    <ChakraProvider>
      <TaxesContextProvider>
        <Home />
      </TaxesContextProvider>
    </ChakraProvider>
  )
}

export default App

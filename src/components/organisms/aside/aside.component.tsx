import { Heading, Highlight, Box, Tooltip } from '@chakra-ui/react'
import { ArrowsLeftRight } from 'tabler-icons-react'
import { useTaxes } from '@/hooks'
import { PaymentRate } from '@/components/molecules'
import { getAsideData } from '@/utils'
import { AsideStyled, List, Container } from './aside.styled'

export default function Aside () {
  const { state, reset } = useTaxes()
  const data = getAsideData(state)
  return (
    <AsideStyled>
      <Container>
        <Heading
          lineHeight="shorter"
          size="md"
          w="full"
          textAlign="center"
          fontFamily="inherit"
          mb={6}
        >
          <Highlight query="neo" styles={{ fontWeight: 'light' }}>
            neo express
          </Highlight>
        </Heading>
        <strong>Tarifas</strong>
        <List>
          {data.map((item, index) => (
            <PaymentRate key={index} {...item} />
          ))}
        </List>
      </Container>
      <Tooltip label="Restablecer tarifas" hasArrow bg="teal" color="white">
        <Box cursor="pointer" alignSelf="self-start">
          <ArrowsLeftRight size={15} onClick={reset} />
        </Box>
      </Tooltip>
    </AsideStyled>
  )
}

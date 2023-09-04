import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow
} from '@chakra-ui/react'
import { getConvertPrice } from '@/utils'
import { type ProfitsProps } from './profits.model'
import { Stonks } from './profits.styled'

export default function Profits ({ percentage, profit }: ProfitsProps) {
  const color: string = profit < 0 ? 'red' : 'inhereit'
  return (
    <Stonks>
      <Stat w="auto" textAlign="right">
        <StatLabel>Ganacias</StatLabel>
        <StatNumber color={color}>{getConvertPrice(profit)}</StatNumber>
        <StatHelpText
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
        >
          <StatArrow type="increase" />
          {percentage}%<small>Margen</small>
        </StatHelpText>
      </Stat>
    </Stonks>
  )
}

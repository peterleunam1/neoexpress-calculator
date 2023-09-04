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
import { UIElements } from '@/constants'

export default function Profits ({ percentage, profit }: ProfitsProps) {
  const color: string = profit < 0 ? 'red' : 'inhereit'
  const { profits, margin } = UIElements

  return (
    <Stonks>
      <Stat w="auto" textAlign="right">
        <StatLabel>{profits}</StatLabel>
        <StatNumber color={color}>{getConvertPrice(profit)}</StatNumber>
        <StatHelpText
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
        >
          <StatArrow type="increase" />
          {percentage}%<small>{margin}</small>
        </StatHelpText>
      </Stat>
    </Stonks>
  )
}

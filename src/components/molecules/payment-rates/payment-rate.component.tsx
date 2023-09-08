import { useState } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { useTaxes } from '@/hooks'
import { InputComponent, PopoverComponent } from '@/components/atoms'
import { type PaymentRatesProps } from '../../../models/app.model'
import { ItemContent, ListItem } from './payment-rate.styled'
import { rates } from '@/constants'
import { getCapitalize } from '@/utils'

export default function PaymentRate ({ icon, name, values }: PaymentRatesProps) {
  const { setPercentege, setShipping, setTax } = useTaxes()
  const [inputValue, setInputValue] = useState<string>('')
  const { tax, percentage, shipping } = rates
  const capitalizedName = getCapitalize(name)
  const popoverLabel = getCapitalize(`editar: ${name}`)
  const isDisabled = !(inputValue.length >= 1)

  const handleChange = (value: string) => {
    setInputValue(value)
  }

  const handleClick = (indicative: string) => {
    const value = Number(inputValue)
    if (indicative === percentage.english) {
      setPercentege(value)
    }
    if (indicative === shipping.english) {
      setShipping(value)
    }
    if (indicative === tax.english) {
      setTax(value)
    }
  }

  return (
    <ListItem>
      <ItemContent align="left">
        {icon}{capitalizedName}:
      </ItemContent>
      {values.map(({ price, edit, indicative }, index) => (
        <ItemContent key={index} align="right">
          <PopoverComponent icon={edit} label={price} placement={indicative}>
            <Stack spacing={2}>
              <InputComponent
                label={popoverLabel}
                onChange={handleChange}
                placeholder={`ingrese ${rates[indicative].spanish}`}
              />
              <Button
                isDisabled={isDisabled}
                size="sm"
                color="teal"
                data-cy={`save-${indicative}`}
                onClick={() => {
                  handleClick(indicative)
                }}
              >
                Guardar
              </Button>
            </Stack>
          </PopoverComponent>
        </ItemContent>
      ))}
    </ListItem>
  )
}

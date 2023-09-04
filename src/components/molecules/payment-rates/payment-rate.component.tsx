import { useState } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import { useTaxes } from '@/hooks'
import { InputComponent, PopoverComponent } from '@/components/atoms'
import { type PaymentRatesProps } from '../../../models/app.model'
import { ItemContent, ListItem } from './payment-rate.styled'

export default function PaymentRate ({ icon, name, values }: PaymentRatesProps) {
  const { setPercentege, setShipping, setTax } = useTaxes()
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (value: string) => {
    setInputValue(value)
  }

  const handleClick = (indicative: string) => {
    const value = Number(inputValue)
    if (indicative === 'percentage') {
      setPercentege(value)
    }
    if (indicative === 'shipping') {
      setShipping(value)
    }
    if (indicative === 'tax') {
      setTax(value)
    }
  }

  const popoverLabel = `Editar: ${name.toLocaleLowerCase()}`
  const isDisabled = !(inputValue.length >= 1)
  return (
    <ListItem>
      <ItemContent align="left">
        {icon}{name}:
      </ItemContent>
      {values.map(({ price, edit, indicative }, index) => (
        <ItemContent key={index} align="right">
          <PopoverComponent icon={edit} label={price} placement={indicative}>
            <Stack spacing={2}>
              <InputComponent
                label={popoverLabel}
                onChange={handleChange}
              />
              <Button
                isDisabled={isDisabled}
                size="sm"
                color='teal'
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

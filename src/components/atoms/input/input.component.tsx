import { type ChangeEvent } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'
import { type InputProps } from './input.model'
import { getCapitalize } from '@/utils'

export default function InputComponent ({ label, placeholder, onChange }: InputProps) {
  const capitalizeLabel = getCapitalize(label)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    event.preventDefault()
    onChange(value)
  }

  return (
    <FormControl>
      <FormLabel fontSize="sm">{capitalizeLabel}</FormLabel>
      <InputGroup size="sm">
        <InputLeftAddon children="$" />
        <Input
          type="number"
          placeholder={placeholder}
          onChange={handleChange}
          data-cy={label}
        />
      </InputGroup>
    </FormControl>
  )
}

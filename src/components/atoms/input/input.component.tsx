import { type ChangeEvent } from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { type InputProps } from './input.model'

export default function InputComponent ({ label, onChange }: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    event.preventDefault()
    onChange(value)
  }

  return (
    <FormControl>
    <FormLabel fontSize='sm'>{label}</FormLabel>
   <InputGroup size='sm'>
   <InputLeftAddon children='$' />
   <Input type='number' placeholder='ej: 50000' onChange={handleChange}/>
   </InputGroup>
  </FormControl>
  )
}

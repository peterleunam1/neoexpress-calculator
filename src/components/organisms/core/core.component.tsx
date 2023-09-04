import { useState } from 'react'
import { Box, FormControl } from '@chakra-ui/react'
import { useTaxes } from '@/hooks'
import { Profits } from '@/components/molecules'
import { InputComponent, InvoiceItem } from '@/components/atoms'
import { getConvertPrice } from '@/utils'
import { CoreStyled, HeaderStyled } from './core.styled'
import { UIElements } from '@/constants'

export default function Core () {
  const [supplierPrice, setSupplierPrice] = useState<number>(0)
  const [salePrice, setSalePrice] = useState<number>(0)
  const { state } = useTaxes()
  const { percenteges, shipping, tax } = state
  const { title, description } = UIElements

  const handleChangeSupplier = (value: string) => {
    setSupplierPrice(Number(value))
  }
  const handleChangeSale = (value: string) => {
    setSalePrice(Number(value))
  }

  const rate = supplierPrice * (percenteges / 100) + tax
  const costs: number = Math.round(supplierPrice !== 0 ? rate : 0)
  const total: number = costs + supplierPrice
  const profits: number = salePrice !== 0 ? salePrice - total : 0

  return (
    <CoreStyled>
      <HeaderStyled>
        <h1>{title}</h1>
        <p>{description}</p>
      </HeaderStyled>
      <FormControl w="full">
        <InputComponent
          label="precio provedor"
          onChange={handleChangeSupplier}
        />
      </FormControl>
      <Box my={3} w="full">
        <InvoiceItem label="Envió">{getConvertPrice(shipping)}</InvoiceItem>
        <InvoiceItem label="Costos">{getConvertPrice(costs)}</InvoiceItem>
        <InvoiceItem label="Total:">{getConvertPrice(total)}</InvoiceItem>
      </Box>
      <FormControl w="full">
        <InputComponent
          label="precio venta"
          onChange={handleChangeSale}
        />
      </FormControl>
      <Profits percentage={0} profit={profits} />
    </CoreStyled>
  )
}

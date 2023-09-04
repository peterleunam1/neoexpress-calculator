import { useContext } from 'react'
import { TaxesContext } from '@/context'

export default function useTaxes () {
  const context = useContext(TaxesContext)
  if (context === undefined) {
    throw new Error('useTaxes must be used within a TaxesContextProvider')
  }
  return context
}

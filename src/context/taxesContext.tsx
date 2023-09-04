import { createContext } from 'react'
import { type CartContextParams, type ChildrenProp } from '@/models'
import { useTaxesReducer } from '@/hooks'
import { initialState } from '@/utils'

export const TaxesContext = createContext<CartContextParams>({
  state: initialState,
  setShipping: () => {},
  setPercentege: () => {},
  setTax: () => {},
  reset: () => {}
})

export const TaxesContextProvider = ({ children }: ChildrenProp) => {
  const { reset, setPercentege, setShipping, setTax, state } =
    useTaxesReducer()
  return (
    <TaxesContext.Provider
      value={{
        state,
        setShipping,
        setPercentege,
        setTax,
        reset
      }}
    >
      {children}
    </TaxesContext.Provider>
  )
}

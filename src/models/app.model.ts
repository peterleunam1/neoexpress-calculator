export interface PaymentRatesProps {
  name: string
  icon: JSX.Element
  values: Values[]
}

export interface Values {
  indicative: 'tax' | 'shipping' | 'percentage'
  price: string
  edit: JSX.Element
}

export interface TaxesModel {
  shipping: number
  percenteges: number
  tax: number
}

export interface ChildrenProp {
  children: React.ReactNode
}

export interface CartContextParams {
  state: TaxesModel
  setShipping: (shipping: number) => void
  setPercentege: (percentege: number) => void
  setTax: (tax: number) => void
  reset: () => void
}

export type ActionType =
  | { type: 'SET_SHIPPING', payload: number }
  | { type: 'SET_PERCENTEGE', payload: number }
  | { type: 'SET_TAX', payload: number }
  | { type: 'RESET', payload: number }

export interface ActionTypeModel {
  SET_SHIPPING: 'SET_SHIPPING'
  SET_PERCENTEGE: 'SET_PERCENTEGE'
  SET_TAX: 'SET_TAX'
  RESET: 'RESET'
}

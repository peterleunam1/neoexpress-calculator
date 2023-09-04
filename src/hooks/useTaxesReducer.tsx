import { useReducer } from 'react'
import { initialState, taxesReducer } from '@/utils'
import { ActionTypes } from '@/constants'

export default function useTaxesReducer () {
  const [state, dispatch] = useReducer(taxesReducer, initialState)
  const { SET_SHIPPING, SET_PERCENTEGE, SET_TAX, RESET } = ActionTypes

  const setShipping = (shipping: number) => {
    dispatch({ type: SET_SHIPPING, payload: shipping })
  }
  const setPercentege = (percentege: number) => {
    dispatch({ type: SET_PERCENTEGE, payload: percentege })
  }
  const setTax = (tax: number) => {
    dispatch({ type: SET_TAX, payload: tax })
  }
  const reset = () => {
    dispatch({ type: RESET, payload: 0 })
  }
  return {
    state,
    setShipping,
    setPercentege,
    setTax,
    reset
  }
}

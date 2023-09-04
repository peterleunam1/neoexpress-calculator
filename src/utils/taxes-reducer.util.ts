import { type ActionType, type TaxesModel } from '@/models'
import { ActionTypes, defaultValues } from '@/constants'
import { clearLocalStorage, persistLocalStorage } from './local-storage.util'

const key: string = 'taxes'
export const initialState: TaxesModel =
  localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key) as string)
    : defaultValues

export const taxesReducer = (state: TaxesModel, action: ActionType) => {
  const { type, payload } = action
  const { SET_SHIPPING, SET_PERCENTEGE, SET_TAX, RESET } = ActionTypes

  switch (type) {
    case SET_SHIPPING:
      persistLocalStorage<TaxesModel>(key, { ...state, shipping: payload })
      return { ...state, shipping: payload }
    case SET_PERCENTEGE:
      persistLocalStorage<TaxesModel>(key, { ...state, percenteges: payload })
      return { ...state, percenteges: payload }
    case SET_TAX:
      persistLocalStorage<TaxesModel>(key, { ...state, tax: payload })
      return { ...state, tax: payload }
    case RESET:
      clearLocalStorage(key)
      return defaultValues
    default:
      return state
  }
}

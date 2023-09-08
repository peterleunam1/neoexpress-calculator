import { Edit, Moneybag, PlaneTilt } from 'tabler-icons-react'
import { type TaxesModel, type PaymentRatesProps } from '@/models'
import { getConvertPrice } from '@/utils'

export const getAsideData = (taxes: TaxesModel): PaymentRatesProps[] => {
  const editColor = 'lightgreen'
  const { shipping, percenteges, tax } = taxes
  return [
    {
      name: 'envío',
      icon: <PlaneTilt size={20} />,
      values: [
        {
          price: getConvertPrice(shipping),
          edit: <Edit color={editColor} />,
          indicative: 'shipping'
        }
      ]
    },
    {
      name: 'mercado Pago',
      icon: <Moneybag size={20} />,
      values: [
        {
          price: `${percenteges} %`,
          edit: <Edit color={editColor} />,
          indicative: 'percentage'
        },
        {
          price: `+ ${getConvertPrice(tax)}`,
          edit: <Edit color={editColor} />,
          indicative: 'tax'
        }
      ]
    }
  ]
}

import { getCapitalize } from '@/utils'
import { type InvoiceItemProps } from './invoice-item.model'
import { InvoiceItemStyled } from './invoice-item.styled'

export default function InvoiceItem ({ label, children }: InvoiceItemProps) {
  const capitalizedLabel = getCapitalize(label)
  return (
    <InvoiceItemStyled>
        <strong>- {capitalizedLabel}</strong>
        <p data-cy={label}>{children}</p>
    </InvoiceItemStyled>
  )
}

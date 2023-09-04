import { type InvoiceItemProps } from './invoice-item.model'
import { InvoiceItemStyled } from './invoice-item.styled'

export default function InvoiceItem ({ label, children }: InvoiceItemProps) {
  return (
    <InvoiceItemStyled>
        <strong>- {label}</strong>
        <p>{children}</p>
    </InvoiceItemStyled>
  )
}

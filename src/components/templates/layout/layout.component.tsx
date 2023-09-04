import { type ChildrenProp } from '../../../models/app.model'
import { LayoutStyled } from './layout.styled'

export default function Layout ({ children }: ChildrenProp) {
  return (
    <LayoutStyled>
      <main>{children}</main>
    </LayoutStyled>
  )
}

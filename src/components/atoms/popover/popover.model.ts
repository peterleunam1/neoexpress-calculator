import { type ChildrenProp } from '../../../models/app.model'

export interface PopoverProps extends ChildrenProp {
  label: string
  placement: string
  icon: JSX.Element
}

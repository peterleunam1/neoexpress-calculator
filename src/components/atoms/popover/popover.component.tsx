import {
  useDisclosure,
  PopoverTrigger,
  Box,
  Popover,
  IconButton,
  PopoverContent,
  FocusLock,
  PopoverArrow,
  PopoverCloseButton,
  type PlacementWithLogical
} from '@chakra-ui/react'
import { type PopoverProps } from './popover.model'
import { rates } from '@/constants'

export default function PopoverComponent ({
  children,
  icon,
  label,
  placement
}: PopoverProps) {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { tax, percentage, shipping } = rates
  let placementValue: PlacementWithLogical = 'right'
  if (placement === shipping.english) {
    placementValue = 'bottom'
  }
  const leftPlacements: string[] = [tax.english, percentage.english]
  if (leftPlacements.includes(placement)) {
    placementValue = 'left'
  }

  return (
    <>
      <Box display="inline-block" mr={3} data-cy={`value-${placement}`}>
        {label}
      </Box>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement={placementValue}
        closeOnBlur={false}
        size="xs"
      >
        <PopoverTrigger>
          <IconButton
            size="xs"
            icon={icon}
            aria-label="2"
            data-cy={`icon-${placement}`}
          />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton data-cy={`close-${placement}`} />
            {children}
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

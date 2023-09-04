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

export default function PopoverComponent ({ children, icon, label, placement }: PopoverProps) {
  const { onOpen, onClose, isOpen } = useDisclosure()
  let placementValue: PlacementWithLogical = 'right'
  if (placement === 'shipping') {
    placementValue = 'bottom'
  }
  const leftPlacements: string[] = ['tax', 'percentage']
  if (leftPlacements.includes(placement)) {
    placementValue = 'left'
  }

  return (
    <>
      <Box display="inline-block" mr={3}>{label}</Box>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement={placementValue}
        closeOnBlur={false}
        size="xs"
      >
        <PopoverTrigger>
          <IconButton size="xs" icon={icon} aria-label="2" />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            {children}
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}

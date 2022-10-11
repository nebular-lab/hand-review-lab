import { Menu, MenuButton } from '@chakra-ui/react'
import React from 'react'

const ActionButton = () => {
  return (
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  )
}

export default ActionButton

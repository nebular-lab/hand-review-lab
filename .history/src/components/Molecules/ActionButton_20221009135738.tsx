import { Button, Menu, MenuButton } from '@chakra-ui/react'
import React from 'react'



const ActionButton = () => {
  return <MenuButton as={Button}>{children}</MenuButton>
}

export default ActionButton

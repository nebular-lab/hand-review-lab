import { Button, Menu, MenuButton } from '@chakra-ui/react'
import React from 'react'

export interface ActionButtonI

const ActionButton = () => {
  return <MenuButton as={Button}>{children}</MenuButton>
}

export default ActionButton
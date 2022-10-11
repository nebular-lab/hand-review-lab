import { MenuItem } from '@chakra-ui/react'
import React from 'react'

export interface ActionMenuProps {
  children: string
}

const ActionMenu = () => {
  return <MenuItem>Download</MenuItem>
}

export default ActionMenu

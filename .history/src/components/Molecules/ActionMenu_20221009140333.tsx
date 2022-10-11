import { MenuItem } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface ActionMenuProps {
  children: string
}

const ActionMenu: FC<ActionMenuProps> = (props) => {
  const { children } = props
  return <MenuItem>{children}</MenuItem>
}

export default ActionMenu

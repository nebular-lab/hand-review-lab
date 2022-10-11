import { MenuItem } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface ActionItemProps {
  children: string
}

const ActionItem: FC<ActionProps> = (props) => {
  const { children } = props
  return <MenuItem>{children}</MenuItem>
}

export default ActionItem

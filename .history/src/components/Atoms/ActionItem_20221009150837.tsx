import { MenuItem } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface ActionItemProps {
  children: string
}

const ActionItem: FC<ActionItemProps> = (props) => {

  return <MenuItem>{children}</MenuItem>
}

export default ActionItem

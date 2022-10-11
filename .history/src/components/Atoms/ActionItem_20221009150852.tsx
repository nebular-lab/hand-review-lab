import { MenuItem, MenuItemProps } from '@chakra-ui/react'
import React, { FC } from 'react'



const ActionItem: FC<MenuItemProps> = (props) => {

  return <MenuItem>{children}</MenuItem>
}

export default ActionItem

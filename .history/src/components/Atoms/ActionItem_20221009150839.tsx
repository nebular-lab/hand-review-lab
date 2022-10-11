import { MenuItem } from '@chakra-ui/react'
import React, { FC } from 'react'



const ActionItem: FC<ActionItemProps> = (props) => {

  return <MenuItem>{children}</MenuItem>
}

export default ActionItem

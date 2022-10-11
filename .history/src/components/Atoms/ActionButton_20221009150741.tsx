import { Button, MenuButton, MenuButtonProps } from '@chakra-ui/react'
import React, { FC } from 'react'



const ActionButton: FC<MenuButtonProps> = (props) => {

  return <MenuButton as={Button}>{children}</MenuButton>
}

export default ActionButton

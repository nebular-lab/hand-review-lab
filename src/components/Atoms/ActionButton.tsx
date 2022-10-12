import { Button, ButtonProps, MenuButton, MenuButtonProps } from '@chakra-ui/react'
import React, { FC } from 'react'

const ActionButton: FC<ButtonProps> = (props) => {
  return <MenuButton as={Button}  {...props} />
}

export default ActionButton

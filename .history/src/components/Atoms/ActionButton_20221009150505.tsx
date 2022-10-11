import { Button, MenuButton } from '@chakra-ui/react'
import React, { FC } from 'react'

export interface ActionButtonProps {
  children: string
}

const ActionButton: FC<ActionButtonProps> = (props) => {
  const { children, ...ButtonProps } = props
  return <MenuButton as={Button}>{children}</MenuButton>
}

export default ActionButton

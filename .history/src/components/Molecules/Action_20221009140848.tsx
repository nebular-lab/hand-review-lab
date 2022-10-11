import { Menu } from '@chakra-ui/react'
import React from 'react'
import ActionButton from '../Atoms/ActionButton'

export interface ActionProps {
  canEdit: boolean
  menuList: string[]
  buttonText: string
}

const Action = () => {
  return (
    <Menu>
      <ActionButton></ActionButton>
    </Menu>
  )
}

export default Action

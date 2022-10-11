import { Menu } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionButton from '../Atoms/ActionButton'

export interface ActionProps {
  canEdit: boolean
  menuList: string[]
  buttonText: string
}

const Action:FC<ActionProps> = (props) => {
const {canEdit,menuList,}
  return (
    <Menu>
      <ActionButton></ActionButton>
    </Menu>
  )
}

export default Action

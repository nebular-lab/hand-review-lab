import { Menu, MenuList } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionButton from '../Atoms/ActionButton'
import ActionItem from '../Atoms/ActionItem'

export interface ActionProps {
  canEdit: boolean
  menuList: string[]
  buttonText: string
}

const Action: FC<ActionProps> = (props) => {
  const { canEdit, itemList, buttonText } = props

  if (canEdit)
    return (
      <Menu>
        <ActionButton>{buttonText}</ActionButton>
        <MenuList>
          {menuList.map((menu, index) => (
            <ActionItem key={index}>{menu}</ActionItem>
          ))}
        </MenuList>
      </Menu>
    )
  else {
    return (
      <Menu>
        <ActionButton>{buttonText}</ActionButton>
      </Menu>
    )
  }
}

export default Action

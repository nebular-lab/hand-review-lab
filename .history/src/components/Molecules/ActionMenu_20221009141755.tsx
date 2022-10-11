import { Menu, MenuList } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionButton from '../Atoms/ActionButton'
import ActionItem from '../Atoms/ActionItem'

export interface ActionProps {
  canEdit: boolean
  itemList: string[]
  buttonText: string
}

const Action: FC<ActionProps> = (props) => {
  const { canEdit, itemList, buttonText } = props

  if (canEdit)
    return (
      <Menu>
        <ActionButton>{buttonText}</ActionButton>
        <MenuList>
          {itemList.map((item, index) => (
            <ActionItem key={index}>{item}</ActionItem>
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

export default ActionItem

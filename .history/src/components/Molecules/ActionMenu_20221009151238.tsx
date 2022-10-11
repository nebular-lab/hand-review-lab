import { Flex, Menu, MenuList } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionButton from '../Atoms/ActionButton'
import ActionItem from '../Atoms/ActionItem'

export interface ActionMenuProps {
  canEdit: boolean
  itemList?: string[]
  buttonText: string
}

const ActionMenu: FC<ActionMenuProps> = (props) => {
  const { canEdit, itemList, buttonText } = props


  if (canEdit)
    return (
      <Flex>
        <Menu>
          <ActionButton>{buttonText}</ActionButton>
          <MenuList>
            {itemList?.map((item, index) => (
              <ActionItem key={index}>{item}</ActionItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <ActionButton>{buttonText}</ActionButton>
          <MenuList>
            {itemList?.map((item, index) => (
              <ActionItem key={index}>{item}</ActionItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    )
  else {
    return (
      <Flex>
        <Menu>
          <ActionButton>{buttonText}</ActionButton>
        </Menu>
        <Menu>
          <ActionButton>{buttonText}</ActionButton>
        </Menu>
      </Flex>
    )
  }
}

export default ActionMenu
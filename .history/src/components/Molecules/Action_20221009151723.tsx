import { Flex, Menu, MenuList } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionButton from '../Atoms/ActionButton'
import ActionItem from '../Atoms/ActionItem'

export interface ActionMenuProps {
  canEdit: boolean
  itemList?: string[]
  posText: string
  moveText: string
}

const ActionMenu: FC<ActionMenuProps> = (props) => {
  const { canEdit, posText, moveText } = props
  const moveList = ['call', 'check', 'fold', 'bet', 'raise', 'allin', '---']
  const posList = ['BB', 'SB', 'UTG', 'HJ', 'CO', 'BTN']
  if (canEdit)
    return (
      <Flex>
        <Menu>
          <ActionButton borderRightRadius={0}>{posText}</ActionButton>
          <MenuList>
            {posList?.map((item, index) => (
              <ActionItem key={index}>{item}</ActionItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <ActionButton border>{moveText}</ActionButton>
          <MenuList>
            {moveList?.map((item, index) => (
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
          <ActionButton borderRightRadius={0}>{posText}</ActionButton>
        </Menu>
        <Menu>
          <ActionButton>{moveText}</ActionButton>
        </Menu>
      </Flex>
    )
  }
}

export default ActionMenu

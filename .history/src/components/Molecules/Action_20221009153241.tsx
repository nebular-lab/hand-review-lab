import { Flex, Menu, MenuList } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionButton from '../Atoms/ActionButton'
import ActionItem from '../Atoms/ActionItem'

export interface ActionMenuProps {
  canEdit: boolean
  posText: string
  moveText: string
}

const Action: FC<ActionMenuProps> = (props) => {
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
          <ActionButton borderLeftRadius={0}>{moveText}</ActionButton>
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
          <ActionButton borderRightRadius={0} disabled>{posText}</ActionButton>
        </Menu>
        <Menu>
          <ActionButton borderLeftRadius={0} disabled>{moveText}</ActionButton>
        </Menu>
      </Flex>
    )
  }
}

export default Action

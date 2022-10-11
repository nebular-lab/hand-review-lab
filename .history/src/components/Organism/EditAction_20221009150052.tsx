import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionMenu from '../Molecules/ActionMenu'

export interface EditActionProps {
  posText: string
  moveText: string
}

const EditAction: FC<EditActionProps> = (props) => {
  const { posText, moveText } = props
  const posList = ['BB', 'SB', 'UTG', 'HJ', 'CO', 'BTN', '---']
  const moveList = ['call', 'check', 'fold', 'bet', 'raise', 'allin', '---']

  return (
    <Flex>
      <ActionMenu
        canEdit={true}
        buttonText={posText}
        itemList={posList}
        bor
      />
      <ActionMenu
        canEdit={true}
        buttonText={moveText}
        itemList={moveList}
      ></ActionMenu>
    </Flex>
  )
}

export default EditAction

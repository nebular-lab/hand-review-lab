import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { useEditingHand } from '../../../../../apollo/hooks/useEditingHand'
import Action from '../../../../Molecules/Action'

interface EditingActionsProps {
  street: number
}
const EditingActions: FC<EditingActionsProps> = (props) => {
  const { street } = props
  // const [editingActions, setEditingActions] =
  //   useRecoilState(editingActionsState)
  const [editingHand] = useEditingHand()
  return (
    <Flex gap={1}>
      {editingHand.actions[street].map((action, index) => {
        let size = action.size.toString()
        if (action.size === 0) {
          size = ''
        }
        return (
          <Action
            key={index}
            pos={action.pos}
            move={action.move}
            size={size}
            canEdit={false}
          />
        )
      })}
    </Flex>
  )
}

export default EditingActions

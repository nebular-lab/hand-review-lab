import { Flex, Grid, GridItem, SimpleGrid, Wrap } from '@chakra-ui/react'
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
  const bb = editingHand.blinds.bb
  return (
    <SimpleGrid columns={4} gap={1}>
      {editingHand.actions[street].map((action, index) => {
        let size = (Math.round((action.size / bb) * 10) / 10).toString()
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
    </SimpleGrid>
  )
}

export default EditingActions

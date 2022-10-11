import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { editingActionsState } from '../../../../store/store'
import Action from '../../../Molecules/Action'

interface EditingActionsProps {
  street: number
}
const EditingActions: FC<EditingActionsProps> = (props) => {
  const { street } = props
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  return (
    <Flex>
      {editingActions[street].map((action, index) => {
        return (
          <Action
            key={index}
            posText={action.pos}
            moveText={`${action.move}${action.size}`}
            canEdit={true}
          />
        )
      })}
    </Flex>
  )
}

export default EditingActions

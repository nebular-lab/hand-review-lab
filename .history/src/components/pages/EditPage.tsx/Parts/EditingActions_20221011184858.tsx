import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { editingActionsState } from '../../../../store/store'

interface EditingActionsProps {
  street: number
}
const EditingActions:FC<EditingActionsProps> = (props) => {
  const {street}=
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  return <div>
    
  </div>
}

export default EditingActions
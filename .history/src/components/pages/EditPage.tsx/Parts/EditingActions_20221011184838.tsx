import React from 'react'
import { useRecoilState } from 'recoil'
import { editingActionsState } from '../../../../store/store'

interface EditingActionsProps {
  street: number
}
const EditingActions = () => {
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  return <div>
    
  </div>
}

export default EditingActions

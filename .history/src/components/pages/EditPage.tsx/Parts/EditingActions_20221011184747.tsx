import React from 'react'
import { editingActionsState } from '../../../../store/store'

const EditingActions = () => {
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  return <div></div>
}

export default EditingActions

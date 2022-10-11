import React from 'react'
import { useRecoilState } from 'recoil'
import { editingActionsState } from '../../../../store/store'

const EditingActions = () => {
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  return <div></div>
}

export default EditingActions

import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionMenu from '../Molecules/ActionMenu'

export interface EditActionProps {
  posText: string
  moveText:string
}

const EditAction: FC<EditActionProps> = (props) => {
  const { posText } = props
  return (
    <Flex>
      <ActionMenu canEdit={true} buttonText={buttonText}></ActionMenu>
      <ActionMenu canEdit={true} buttonText={buttonText}></ActionMenu>
    </Flex>
  )
}

export default EditAction

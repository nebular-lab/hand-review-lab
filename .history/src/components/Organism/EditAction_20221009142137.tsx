import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionMenu from '../Molecules/ActionMenu'

export interface EditActionProps{
  buttonText:string
}

const EditAction:FC<EditActionProps> = (props) => {
  const 
  return <Flex><ActionMenu canEdit={true} ></ActionMenu></Flex>
}

export default EditAction

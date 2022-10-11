import { Flex } from '@chakra-ui/react'
import React from 'react'
import ActionMenu from '../Molecules/ActionMenu'

export interface EditActionProps{
  buttonText:string
}

const EditAction:FC = () => {
  return <Flex><ActionMenu canEdit={true} ></ActionMenu></Flex>
}

export default EditAction

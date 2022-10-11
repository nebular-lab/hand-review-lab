import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import ActionMenu from '../Molecules/ActionMenu'

export interface EditActionProps{
  buttonText:string
}

const EditAction:FC<Edit> = () => {
  return <Flex><ActionMenu canEdit={true} ></ActionMenu></Flex>
}

export default EditAction

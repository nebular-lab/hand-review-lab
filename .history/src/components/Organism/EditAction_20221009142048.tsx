import { Flex } from '@chakra-ui/react'
import React from 'react'
import ActionMenu from '../Molecules/ActionMenu'

export interface EditActionProps

const EditAction = () => {
  return <Flex><ActionMenu canEdit={true} ></ActionMenu></Flex>
}

export default EditAction

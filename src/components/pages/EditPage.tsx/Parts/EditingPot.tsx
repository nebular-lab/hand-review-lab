import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { editingStreetPotState } from '../../../../store/store'

interface EditingPotProps {
  street: number
}
const EditingPot: FC<EditingPotProps> = (props) => {
  const { street } = props
  const streetPot = useRecoilValue(editingStreetPotState)
  return <Flex>{streetPot[street]}</Flex>
}

export default EditingPot

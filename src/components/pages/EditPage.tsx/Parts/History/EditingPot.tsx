import { Flex } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { useEditingHand } from '../../../../../apollo/hooks/useEditingHand'

interface EditingPotProps {
  street: number
}
const EditingPot: FC<EditingPotProps> = (props) => {
  const { street } = props
  const [editingHand] = useEditingHand()
  return <Flex>{editingHand.pots[street]}</Flex>
}

export default EditingPot

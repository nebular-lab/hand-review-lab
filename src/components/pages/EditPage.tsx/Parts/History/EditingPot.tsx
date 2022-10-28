import { Flex, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { useEditingHand } from '../../../../../apollo/hooks/useEditingHand'

interface EditingPotProps {
  street: number
}
const EditingPot: FC<EditingPotProps> = (props) => {
  const { street } = props
  const [editingHand] = useEditingHand()
  const bb = editingHand.blinds.bb
  if (!editingHand.pots[street]) return <></>
  return (
    <Text>
      {(Math.round((editingHand.pots[street] / bb) * 10) / 10).toString()}BB
    </Text>
  )
}

export default EditingPot

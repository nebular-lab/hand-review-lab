import { Flex, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import {
  ActionInterface,
  CardInterface,
  editingActionsState,
  editingCardsState,
  editingContentState,
  editingESState,
  editingPotState,
  editingTitleState,
  isDataState,
  isOpenCardSetterState,
  isOpenNumSetterState,
  selectedActionState,
} from '../../../../store/store'
import Card from '../../../Atoms/Card'
import EditingActions from './EditingActions'
import Cards from './EditingCards'

interface StreetActionProps {
  streetIndex: number
}

const StreetAction: FC<StreetActionProps> = (props) => {
  const { streetIndex } = props
  return (
    <Flex>
      <Cards street={streetIndex} />
      <EditingActions street={streeti}/>
    </Flex>
  )
}



export default StreetAction

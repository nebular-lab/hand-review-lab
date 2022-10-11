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
} from '../../store/store'
import Card from '../Atoms/Card'

interface StreetActionProps {
  streetIndex: number
}

const StreetAction: FC<StreetActionProps> = (props) => {
  const { streetIndex } = props
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  const [selectedAction, setSelectedAction] =
    useRecoilState(selectedActionState)
  const [isOpenNumSetter, setIsOpenNumSetter] =
    useRecoilState(isOpenNumSetterState)
  const [isOpenCardSetter, setIsOpenCardSetter] = useRecoilState(
    isOpenCardSetterState
  )
  const [editingES, setEditingES] = useRecoilState(editingESState)
  const [editingPot, setEditingPot] = useRecoilState(editingPotState)
  const [editingTitle, setEditingTitle] = useRecoilState(editingTitleState)
  const [editingContent, setEditingContent] =
    useRecoilState(editingContentState)
  const [isData, setIsData] = useRecoilState(isDataState)
  const actions: ActionInterface[] = editingActions[streetIndex]

  return (
    <Flex>
      <Cards street={streetIndex} />
    </Flex>
  )
}

interface CardProps {
  street: number
}
const Cards: FC<CardProps> = (props) => {
  const { street } = props
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  const cardIndexes: number[] = []
  switch (street) {
    case 0:
      break
    case 1:
      cardIndexes.push(0)
      cardIndexes.push(1)
      cardIndexes.push(2)
      break
    case 2:
      cardIndexes.push(3)
      break
    case 3:
      cardIndexes.push(4)
    default:
      break
  }
  return (
    <>
      {cardIndexes.map((cardIndex) => {
        <Card
          num={editingCards[cardIndex].num}
          mark={editingCards[cardIndex].mark}
        />
      })}
    </>
  )
}

export default StreetAction

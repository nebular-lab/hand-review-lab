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
  switch (streetIndex) {
    case 0:
      break
    case 1:
      cards.push(editingCards[0])
      cards.push(editingCards[1])
      cards.push(editingCards[2])
      break
    case 2:
      cards.push(editingCards[3])
      break
    case 3:
      cards.push(editingCards[4])
  }
  return (
    <Flex>
      <Cards cards={cards} />
    </Flex>
  )
}

interface CardProps {
  cards: CardInterface[]
}
const Cards: FC<CardProps> = (props) => {
  const { cards } = props
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  console.log(cards)
  return (
    <>
      {cards.map((card, index) => {
        // return <Card key={index} num={card.num} mark={card.mark} />
      })}
    </>
  )
}

export default StreetAction

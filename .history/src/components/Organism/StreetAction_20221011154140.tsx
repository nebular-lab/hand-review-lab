import { Flex, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import {
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
  let cards:CardInterface[]
  if(streetIndex===)
  return (
    <Flex>
      <Cards cards={editingCards}/>
    </Flex>
  )
}

interface CardProps{
  cards:CardInterface[]
}
const Cards:FC<CardProps>=(props)=>{
  const {cards}=props
  return <>{cards.map((card,index)=>{
    return <Card key={index} num={card.num} mark={card.mark} />
  })}</>
}

export default StreetAction

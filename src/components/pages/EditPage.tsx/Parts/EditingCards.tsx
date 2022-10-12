import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { editingCardsState } from '../../../../store/store'
import Card from '../../../Atoms/Card'

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
    <Flex gap={1}>
      {cardIndexes.map((cardIndex, index) => {
        return (
          <Card
            key={index}
            num={editingCards[cardIndex].num}
            mark={editingCards[cardIndex].mark}
            size="md"
          />
        )
      })}
    </Flex>
  )
}

export default Cards

import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { useEditingHand } from '../../../../../apollo/hooks/useEditingHand'

import Card from '../../../../Atoms/Card'

interface CardProps {
  street: number
}
const Cards: FC<CardProps> = (props) => {
  const { street } = props
  const [editingHand] = useEditingHand()
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
            num={editingHand.cards[cardIndex].num}
            mark={editingHand.cards[cardIndex].mark}
            size="md"
          />
        )
      })}
    </Flex>
  )
}

export default Cards

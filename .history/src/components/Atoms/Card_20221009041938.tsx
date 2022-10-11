import {
  AspectRatio,
  AspectRatioProps,
  BackgroundProps,
  ColorProps,
  theme,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { CardMark, CardNum } from '../../types/types'

export interface CardProps {
  num: CardNum
  mark: CardMark
  w: 'md' | 'sm'
}

const Card: FC<CardProps> = (props) => {
  const { num, mark, w } = props
  let bg

  switch (mark) {
    case 'h':
      bg = 'red.500'
      break
    case 'c':
      bg = 'green.500'
      break
    case 'd':
      bg = 'bg-blue-500'
      break
    case 's':
      bg = 'bg-gray-600'
      break
    case 'w':
      bg = 'bg-gray-300'
      break
    default:
      console.log('カードの色入力にエラー')
  }

  return (
    <AspectRatio w={w} bg={theme.colors.red[500]}>
      {num}
    </AspectRatio>
  )
}

export default Card

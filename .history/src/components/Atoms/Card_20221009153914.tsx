import {
  AspectRatio,
  AspectRatioProps,
  BackgroundProps,
  Box,
  ColorProps,
  Text,
  theme,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { CardMark, CardNum } from '../../types/types'

export interface CardProps {
  num: CardNum
  mark: CardMark
  w?: 'md' | 'sm' | 'full'
}

const Card: FC<CardProps> = (props) => {
  const { num, mark, w = 'full' } = props
  let bg

  switch (mark) {
    case 'h':
      bg = 'red.500'
      break
    case 'c':
      bg = 'green.500'
      break
    case 'd':
      bg = 'blue.500'
      break
    case 's':
      bg = 'gray.600'
      break
    case 'w':
      bg = 'gray.300'
      break
    default:
      console.log('カードの色入力にエラー')
  }

  return (
    <Text w={w} bg={bg} textColor={}>
      {num}
    </Text>
  )
}

export default Card

import {
  AspectRatio,
  AspectRatioProps,
  BackgroundProps,
  Badge,
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
  size?: 'md' | 'sd'
}

const Card: FC<CardProps> = (props) => {
  const { num, mark, size = 'md' } = props
  let w
  switch (size) {
    case 'md':
      w = 6
      break
    case 'sd':
      w = 8
      break
    default:
      break
  }
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
    <AspectRatio ratio={3 / 4} w={w}>
      <Badge bg={bg} textColor="white" fontSize={size}>
        {num}
      </Badge>
    </AspectRatio>
  )
}

export default Card

import { AspectRatio, AspectRatioProps } from '@chakra-ui/react'
import React, { FC } from 'react'
import { CardMark, CardNum } from '../../types/types'

export interface CardProps {
  num: CardNum
  mark: CardMark
  w: 'md' | 'sm'
}

const Card: FC<CardProps> = (props) => {
  const { num, mark, w } = props
  
  return <AspectRatio w={w} bg>{num}</AspectRatio>
}

export default Card

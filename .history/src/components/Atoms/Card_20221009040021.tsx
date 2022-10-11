import { AspectRatio, AspectRatioProps } from '@chakra-ui/react'
import React, { FC } from 'react'
import { CardMark, CardNum } from '../../types/types'

export interface CardProps {
  num: CardNum
  mark: CardMark
  w: 'md' | 'sm'
}

const Card :FC<CardProps>= (props) => {
  const {num,mark,}
  return <AspectRatio w={w}></AspectRatio>
}

export default Card
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react'
import React from 'react'
import { CardMark, CardNum } from '../../types/types'

export interface CardProps {
  num: CardNum
  mark: CardMark
  w: 'md' | 'sm'
}

const Card :FC<>= () => {
  return <AspectRatio w={w}></AspectRatio>
}

export default Card
import { AspectRatio } from '@chakra-ui/react'
import React from 'react'
import { CardMark, CardNum } from '../../types/types'



export interface CardProps{
  num:CardNum
  mark:CardMark
  w:wi
}

const Card = () => {
  return (
    <AspectRatio w={w}>
      
    </AspectRatio>
  )
}

export default Card

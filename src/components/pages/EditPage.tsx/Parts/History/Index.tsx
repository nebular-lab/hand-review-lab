import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import StreetAction from './StreetHistory'

const History = () => {
  const indexes = [0, 1, 2, 3]
  return (
    <Flex direction="column" gap={2} w="full" bg="yellow.200">
      {/* preflop ~ river */}
      {indexes.map((index) => (
        <StreetAction key={index} streetIndex={index} />
      ))}
    </Flex>
  )
}

export default History

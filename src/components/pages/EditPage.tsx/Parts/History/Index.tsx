import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import StreetAction from './StreetHistory'

const History = () => {
  const indexes = [0, 1, 2, 3]
  return (
    <Flex direction="column" bg="white" gap={2} w="full">
      {/* preflop ~ river */}
      {indexes.map((index) => (
        <Flex key={index}>
          <StreetAction streetIndex={index} />
        </Flex>
      ))}
    </Flex>
  )
}

export default History

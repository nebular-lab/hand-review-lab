import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import StreetAction from './StreetAction'

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

      {/* {canEdit && (
        <>
          <Modal
            opened={isOpenCardSetter}
            onClose={() => setIsOpenCardSetter(false)}
          >
            <CardList />
          </Modal>
          <Modal
            opened={isOpenNumSetter}
            onClose={() => setIsOpenNumSetter(false)}
          >
            <NumSetter />
          </Modal>
        </>
      )} */}
    </Flex>
  )
}

export default History

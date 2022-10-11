import { Flex } from '@chakra-ui/react'
import React from 'react'
import StreetAction from '../pages/EditPage.tsx/Parts/StreetAction'

const History = () => {
  return (
    <Flex direction="column">
      {/* preflop ~ river */}
      <StreetAction streetIndex={0} />

      <StreetAction streetIndex={1} />

      <StreetAction streetIndex={2} />

      <StreetAction streetIndex={3} />
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

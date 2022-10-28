import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'

import Card from '../../../../Atoms/Card'
import EditingActions from './EditingActions'
import Cards from './EditingCards'
import EditingPot from './EditingPot'

interface StreetActionProps {
  streetIndex: number
}

const StreetAction: FC<StreetActionProps> = (props) => {
  const { streetIndex } = props
  let streetName = ''
  switch (streetIndex) {
    case 0:
      streetName = 'preflop'
      break
    case 1:
      streetName = 'flop'
      break
    case 2:
      streetName = 'turn'
      break
    case 3:
      streetName = 'river'
  }
  return (
    <Flex px="3" py="3">
      <Flex w="70px">
        <Text textTransform="uppercase" fontSize="sm">
          {streetName}
        </Text>
      </Flex>
      <Flex w="40px">
        <EditingPot street={streetIndex} />
      </Flex>
      <Flex w="100px">
        <Cards street={streetIndex} />
      </Flex>
      <Flex>
        <EditingActions street={streetIndex} />
      </Flex>
    </Flex>
  )
}

export default StreetAction

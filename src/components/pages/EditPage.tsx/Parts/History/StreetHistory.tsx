import {
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react'
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
      streetName = 'pf'
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
    <Grid
      templateColumns="repeat(24,1fr)"
      px="3"
      py="3"
      w="50rem"
      bg="red.200"
      alignItems="center"
      gap={1}
    >
      <GridItem colSpan={2} bg="blue.200">
        <Text  textTransform="uppercase">
          {streetName}
        </Text>
      </GridItem>
      <GridItem colSpan={2} bg="blue.200">
        <EditingPot street={streetIndex} />
      </GridItem>
      <GridItem colSpan={3} bg="blue.200">
        {streetIndex === 0 && ' '}
        <Cards street={streetIndex} />
      </GridItem>
      <GridItem colSpan={17} bg="blue.200">
        <EditingActions street={streetIndex} />
      </GridItem>
    </Grid>
  )
}

export default StreetAction

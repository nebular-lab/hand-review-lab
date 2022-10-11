import { Flex, Text, TextProps, Th } from '@chakra-ui/react'
import React, { FC } from 'react'

const TableLabel: FC<TextProps> = (props) => {
  return (
    <Th></Th>
    <Flex>
      <Text {...props}></Text>
    </Flex>
  )
}

export default TableLabel

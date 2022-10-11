import { Flex, Text, TextProps } from '@chakra-ui/react'
import React, { FC } from 'react'

const TableLabel: FC<TextProps> = (props) => {
  return (
    <Th
    <Flex>
      <Text {...props}></Text>
    </Flex>
  )
}

export default TableLabel

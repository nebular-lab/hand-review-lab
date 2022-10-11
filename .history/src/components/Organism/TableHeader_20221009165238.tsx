import { Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const TableHeader = () => {
  const headerLabels=["editor","Xpot","ポジション","Tag","Site","Rate"]
  return (
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
  )
}

export default TableHeader
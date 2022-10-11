import { Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import TableLabel from '../Molecules/TableLabel'

const TableHeader = () => {
  const headerLabels=["Editor","Xpot","Position","Tag","Site","Rate"]
  return (
    <Thead>
      <Tr>
{headerLabels.map((label)=><TableLabel key></TableLabel>)}
      </Tr>
    </Thead>
  )
}

export default TableHeader

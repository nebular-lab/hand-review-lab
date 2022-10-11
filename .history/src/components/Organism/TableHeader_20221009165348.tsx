import { Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const TableHeader = () => {
  const headerLabels=["Editor","Xpot","Position","Tag","Site","Rate"]
  return (
    <Thead>
      <Tr>
{headerLabels.map((label)=>
})}
      </Tr>
    </Thead>
  )
}

export default TableHeader

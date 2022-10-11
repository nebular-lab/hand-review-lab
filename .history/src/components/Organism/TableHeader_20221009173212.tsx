import { Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import TableLabel from '../Molecules/TableLabel'

const TableHeader = () => {
  const headerLabels = ['Editor', 'Xpot', 'Position', 'Tag', 'Site', 'Rate']
  return (
    <Thead bg="blue.200">
      <Tr>
        {headerLabels.map((label) => (
          <TableLabel key="label">{label}</TableLabel>
        ))}
      </Tr>
    </Thead>
  )
}

export default TableHeader

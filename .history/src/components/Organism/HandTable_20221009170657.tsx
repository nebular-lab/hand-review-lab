import { Table, TableContainer } from '@chakra-ui/react'
import React from 'react'
import TableHeader from './TableHeader'

const HandTable = () => {
  const hands:[];
  return (
    <TableContainer>
      <Table variant="simple">
        <TableHeader />
        <Tbody>
          {hands.map()}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default HandTable
import { Table, TableContainer, Tbody } from '@chakra-ui/react'
import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow';

const HandTable = () => {
  const hands:[]=[];
  return (
    <TableContainer>
      <Table variant="simple">
        <TableHeader />
        <Tbody>
          {hands.map((hand)=>{
<TableRow
          })}
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

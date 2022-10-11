import { Table, TableContainer } from '@chakra-ui/react'
import React from 'react'
import TableHeader from './TableHeader'

const HandTable = () => {
  
  return (
    <TableContainer>
      <Table variant="simple">
        <TableHeader />
        <Tbody>
          
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

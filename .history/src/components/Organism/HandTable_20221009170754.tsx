import { Table, TableContainer, Tbody } from '@chakra-ui/react'
import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const HandTable = () => {
  const hands: [] = []
  return (
    <TableContainer>
      <Table variant="simple">
        <TableHeader />
        <Tbody>
          {hands.map((hand) => {
            return<TableRow key=/>
          })}
        </Tbody>

      </Table>
    </TableContainer>
  )
}

export default HandTable

import { useQuery } from '@apollo/client'
import { Table, TableContainer, Tbody } from '@chakra-ui/react'
import React from 'react'
import { GetAllHandsQuery } from '../../gql/graphql'
import { GET_ALL_HANDS } from '../../graphql/queries'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const HandTable = () => {
  const { data, loading, error } = useQuery<GetAllHandsQuery>(GET_ALL_HANDS);
  
  return (
    <TableContainer>
      <Table variant="simple">
        <TableHeader />
        <Tbody>
          {data?.hands.map((hand) => {
            return <TableRow key={hand.id} editor={hand.user_id} Xpot={2} position="BBvsBU" tags={["test","test2"]}  />
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default HandTable

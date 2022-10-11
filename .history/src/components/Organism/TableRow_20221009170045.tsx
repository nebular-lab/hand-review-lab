import { Flex, Td, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'

interface TableRowProps {
  editor: string
  Xpot: number
  position: string
  tags: string[]
  site: string
  rate: string
}

const TableRow: FC<TableRowProps> = (props) => {
  const { editor, Xpot, position, tags, site, rate } = props
  return (
    <Tr>
      <Td>{editor}</Td>
      <Td>{`${Xpot}pot`}</Td>
      <Td >{position}</Td>
      <Td >
        <Flex>
          
        </Flex>
      </Td>
    </Tr>
  )
}

export default TableRow

import { Td, Tr } from '@chakra-ui/react'
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
  const {editor,Xpot,position,tags,}
  return (
    <Tr>
      <Td>{editor}</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
  )
}

export default TableRow

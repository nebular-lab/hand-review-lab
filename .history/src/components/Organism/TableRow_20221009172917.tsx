import { Badge, Flex, Tag, Td, Tr } from '@chakra-ui/react'
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
      <Td>{`${Xpot}bp`}</Td>
      <Td>{position}</Td>
      <Td>
        <Flex>
          {tags.map((tag) => (
            <Badge key={tag} colorScheme=>{tag}</Badge>
          ))}
        </Flex>
      </Td>
      <Td>
        <Badge>{site}</Badge>
      </Td>
      <Td>
        <Badge>{rate}</Badge>
      </Td>
    </Tr>
  )
}

export default TableRow

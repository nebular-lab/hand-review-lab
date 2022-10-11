import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import HandTable from './Parts/HandTable'
import { Header } from '../../Organism/Header'
import Layout from '../../Template/Layout'

const HandsPage = () => {
  return (
    <Layout>
      <Box mx="auto" mt="10">
        <HandTable />
      </Box>
    </Layout>
  )
}

export default HandsPage

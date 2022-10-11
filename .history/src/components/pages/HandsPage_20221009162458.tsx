import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../Organism/Header'
import Layout from '../Template/Layout'

const HandsPage = () => {
  return (
    <Flex w="100vw" minH="100vh" direction="column" bg="blue.100">
      <Header />
    </Flex>
  )
}

export default HandsPage

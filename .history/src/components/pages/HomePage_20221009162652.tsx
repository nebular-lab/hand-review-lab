import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../Atoms/Card'
import { Header } from '../Organism/Header'
import Layout from '../Template/Layout'

const HomePage = () => {
  return (
    <Flex w="100vw" minH="100vh" direction="column" bg="gray.100">
      <Header />
    </Flex>
  )
}

export default HomePage

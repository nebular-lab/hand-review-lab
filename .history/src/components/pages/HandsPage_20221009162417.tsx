import { Box } from '@chakra-ui/react'
import React from 'react'
import Layout from '../Template/Layout'

const HandsPage = () => {
  return (
    <Flex w="100vw" minH="100vh" direction="column" bg="white">
      <Header />
      <>{children}</>
    </Flex>
  )
}

export default HandsPage

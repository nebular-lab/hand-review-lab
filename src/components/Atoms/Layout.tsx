import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Header } from '../Organism/Header'

const Layout = (props: { children: ReactNode }) => {
  const { children } = props
  return (
    <Flex w="100vw" minH="100vh" direction="column" bg="gray.100">
      <Header />
      <>{children}</>
    </Flex>
  )
}

export default Layout

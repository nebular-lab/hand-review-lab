import { Box, Flex } from '@chakra-ui/react'
import { Header } from '../Organism/Header'

const Layout = (props: { children: JSX.Element[] | JSX.Element }) => {
  const { children } = props
  return (
    <Flex w="100vw" minH="100vh" direction="column" bg="white">
      <Header />
      <>{children}</>

      <Box h="16"></Box>
      <Box h="72px"></Box>
    </Flex>
  )
}

export default Layout

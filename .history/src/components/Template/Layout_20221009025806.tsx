import { Box, Flex } from '@chakra-ui/react';
import Footer from './footer';
import Header from './header';


const Layout = (props: { children: JSX.Element[] | JSX.Element }) => {
  const { children } = props;
  return (
    <Flex w="100vw" minH="100vh" direction="column" bg="white">
      <Header />
      <>{children}</>
      <Footer />
      <Box h="16"></Box>
      <Box h="72px"></Box>
      <NavigationBar />
    </Flex>
  );
};

export default Layout;
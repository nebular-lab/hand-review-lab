import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
    useAuth0()
  console.log(user)
  return (
    <Flex
      as="header"
      h={14}
      w="full"
      bg="white"
      alignItems="center"
      px={8}
      position="fixed"
    >
      <Link href="/hands">
        <Text fontWeight="bold">ハンドレビュー研究所</Text>
      </Link>
      <Spacer />
      {isAuthenticated ? (
        <Flex alignItems="center" gap={4}>
          <Text>{user?.name}</Text>
          <Avatar
            size="md"
            name={user?.name}
            src={user?.picture}
            onClick={() => logout()}
          />
          <Link href="/edit">
            <Button colorScheme="blue">add new</Button>
          </Link>
        </Flex>
      ) : (
        <Button colorScheme="blue" onClick={() => loginWithPopup()}>
          Log in
        </Button>
      )}
    </Flex>
  )
}

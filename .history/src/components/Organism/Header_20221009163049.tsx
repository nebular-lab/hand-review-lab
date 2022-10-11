import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
    useAuth0()
  return (
    <Flex h={14} bg="white" >
      <Link href="/hands">
        <Text fontWeight="bold">ハンドレビュー研究所</Text>
      </Link>
      {isAuthenticated ? (
        <Avatar
          size="md"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          onClick={() => logout()}
        />
      ) : (
        <Button onClick={() => loginWithPopup()}>Log in</Button>
      )}
    </Flex>
  )
}

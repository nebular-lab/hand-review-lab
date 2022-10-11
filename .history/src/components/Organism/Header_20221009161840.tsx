import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
    useAuth0()
  if (isLoading) return <div>Loading...</div>
  return (
    <Flex>
      <Link href="/hands">
        <Text>ハンドレビュー研究所</Text>
      </Link>
      {isAuthenticated ? (
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          onClick={() => loginWithPopup()}
        />
      ) : (
        <Button onClick={() => loginWithPopup()}>Log in</Button>
      )}
    </Flex>
  )
}

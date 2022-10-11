import { useAuth0 } from '@auth0/auth0-react'
import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
    useAuth0()
  if (isLoading) return <div>Loading...</div>
  return (
    <Flex>
      
      <Link href="/hands">
        <Text>はんどれ</Text>
      </Link>
      {isAuthenticated ? (
        <Button onClick={() => logout()}>Logout</Button>
      ) : (
        <Button onClick={() => loginWithPopup()}>Log in</Button>
      )}
    </Flex>
  )
}

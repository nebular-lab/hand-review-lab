import { useAuth0 } from '@auth0/auth0-react'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
    useAuth0()
  if (isLoading) return <div>Loading...</div>
  return (
    <Flex>
      
      <Link href="/hands">
        <
      </Link>
      {isAuthenticated ? (
        <Button onClick={() => logout()}>Logout</Button>
      ) : (
        <Button onClick={() => loginWithPopup()}>Log in</Button>
      )}
    </Flex>
  )
}

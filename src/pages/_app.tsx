import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'
import { Auth0Provider } from '@auth0/auth0-react'
import { RecoilRoot } from 'recoil'
import { AuthorizedApolloProvider } from '../components/Organism/AuthorizedApolloProvider'
function MyApp({ Component, pageProps }: AppProps) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE as string
  return (
    <Auth0Provider domain={domain} clientId={clientId} audience={audience}>
      <AuthorizedApolloProvider>
        <RecoilRoot>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </RecoilRoot>
      </AuthorizedApolloProvider>
    </Auth0Provider>
  )
}

export default MyApp

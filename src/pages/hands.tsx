import { useQuery } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import HandsPage from '../components/pages/HandsPage/Index'
import { GET_ALL_HANDS } from '../graphql/queries'

const Hands = () => {
  return <HandsPage />
}

export default Hands

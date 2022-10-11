import { useQuery } from '@apollo/client';
import React from 'react'
import HandsPage from '../components/pages/HandsPage'

const Hands = () => {
  const { data, loading, error } = useQuery(GET_ALL_HANDs);
  const { isAuthenticated } = useAuth0();
  return <HandsPage />
}

export default Hands

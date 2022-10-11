import { useQuery } from '@apollo/client';
import React from 'react'
import HandsPage from '../components/pages/HandsPage'
import { GET_ALL_HANDS } from '../graphql/queries';

const Hands = () => {
  const { data, loading, error } = useQuery(GET_ALL_HANDS);
  const { isAuthenticated } = useAuth0();
  return <HandsPage />
}

export default Hands

import { useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import HandsPage from '../components/pages/HandsPage'
import { GET_ALL_HANDS } from '../graphql/queries';

const Hands = () => {
  const { data, loading, error } = useQuery(GET_ALL_HANDS);
  const { isAuthenticated } = useAuth0();
  return <HandsPage />
}

export default Hands

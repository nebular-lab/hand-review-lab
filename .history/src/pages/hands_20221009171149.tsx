import React from 'react'
import HandsPage from '../components/pages/HandsPage'

const Hands = () => {
  const { data, loading, error } = useQuery(FETCH_TODOS);
  const { isAuthenticated } = useAuth0();
  return <HandsPage />
}

export default Hands

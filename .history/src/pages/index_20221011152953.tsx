import type { NextPage } from 'next'

import HomePage from '../components/pages/HomePage2/HomePage'
import { editHistory } from '../lib/editHistory'

const Home: NextPage = () => {
  editHistory('')
  return <HomePage />
}

export default Home

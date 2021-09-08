import Home from 'components/Home'
import IDatabase from 'types/database'

import db from '../../db.json'

export default function Index() {
  return <Home db={(db as unknown) as IDatabase} />
}

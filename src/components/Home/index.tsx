import IDatabase from 'types/database'

import * as S from './styles'

interface HomeProps {
  db: IDatabase
}

const Home = ({ db }: HomeProps) => (
  <S.Background image={db.bg}>
    <S.Title>My Page</S.Title>
  </S.Background>
)

export default Home

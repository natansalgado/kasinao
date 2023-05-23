import GlobalStyles from './styles/global'
import { Nav } from './components/Nav'
import { Mine } from './components/Mine'

import { useAppSelector } from './hooks'

function App() {
  const { actived } = useAppSelector(state => state.user)

  return (
    <div className='App'>
      <Nav />
      {actived === 'mine' && <Mine />}
      <GlobalStyles />
    </div>
  )
}

export default App

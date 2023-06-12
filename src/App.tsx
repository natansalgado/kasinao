import GlobalStyles from './styles/global'
import { Nav } from './components/Nav'
import { Menu } from './components/Menu'
import { Mine } from './components/Mine'
import { Double } from './components/Double'
import { Crash } from './components/Crash'
import { Settings } from './components/Settings'

import { useAppSelector } from './hooks'

function App() {
  const { actived, isMenuOpen } = useAppSelector(state => state.user)

  return (
    <div className='App'>
      <Nav />

      {isMenuOpen && <Menu />}

      {actived === 'mine' && <Mine />}
      {actived === 'double' && <Double />}
      {actived === 'crash' && <Crash />}
      {actived === 'settings' && <Settings />}

      <p className='warning'><strong>AVISO:</strong> Este projeto tem como objetivo simular um cassino online exclusivamente para proporcionar diversão aos usuários. Em nenhuma circunstância será utilizado dinheiro real neste ambiente! A intenção é garantir uma experiência virtual segura e livre de transações financeiras. Aproveite a emoção dos jogos de cassino sem se preocupar com apostas ou perdas reais!</p>

      <GlobalStyles />
    </div>
  )
}

export default App

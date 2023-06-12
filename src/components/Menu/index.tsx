import { Container, Buttons, Button } from './styles'
import { BsFillGearFill } from 'react-icons/bs'

import { useAppDispatch } from '../../hooks'
import { active, changeMenu } from '../../UserSlice'

export const Menu = () => {
  const dispatch = useAppDispatch()

  const changeActived = (game: string) => {
    dispatch(active(game))
    dispatch(changeMenu())
  }

  return (
    <Container>
      <Buttons>
        <Button onClick={() => changeActived('mine')}>💣 Mine</Button>
        <Button onClick={() => changeActived('double')}>🎲 Double</Button>
        <Button onClick={() => changeActived('crash')}>📈 Crash</Button>
        <Button onClick={() => changeActived('settings')}><BsFillGearFill /> Configurações</Button>
      </Buttons>
    </Container>
  )
}
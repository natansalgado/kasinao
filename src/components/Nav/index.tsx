import { Container, Logo, Button, Buttons, User, Name, Cash, Settings } from "./styles"
import { BsFillGearFill } from 'react-icons/bs'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { active } from "../../UserSlice"

export const Nav = () => {
  const { name, cash } = useAppSelector(value => value.user)
  const dispatch = useAppDispatch()
  const firstName = name.split(' ')[0]

  const changeActived = (game: string) => {
    dispatch(active(game))
  }

  return (
    <Container>
      <Logo>KASINÃO</Logo>

      <Buttons>
        <Button onClick={() => changeActived('mine')}>Mine</Button>
        <Button onClick={() => changeActived('double')}>Double</Button>
        <Button onClick={() => changeActived('crash')}>Crash</Button>
      </Buttons>

      <User>
        <Name>{name ? firstName : 'registre-se'}</Name>
        <Cash>R$ {cash.toFixed(2).replace('.', ',')}</Cash>
        <Settings onClick={() => changeActived('settings')}><BsFillGearFill /></Settings>
      </User>

    </Container>
  )
}
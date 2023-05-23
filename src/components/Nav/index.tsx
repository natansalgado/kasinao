import { Container, Logo, Button, Buttons, User, Name, Cash, Add } from "./styles"

import { useAppSelector, useAppDispatch } from '../../hooks'
import { active } from "../../UserSlice"

export const Nav = () => {
  const { name, cash } = useAppSelector(value => value.user)
  const dispatch = useAppDispatch()

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
        <Name>{name}</Name>
        <Cash>R$ {cash.toFixed(2).replace('.', ',')}</Cash>
        <Add>+</Add>
      </User>

    </Container>
  )
}
import { Container, Logo, Button, Cash } from "./styles"
import { HiMenu } from 'react-icons/hi'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { changeMenu } from "../../UserSlice"

export const Nav = () => {
  const { cash } = useAppSelector(value => value.user)
  const dispatch = useAppDispatch()

  return (
    <>
      <Container>
        <Button>
          <HiMenu size={24} onClick={() => dispatch(changeMenu())} />
        </Button>
        <Logo>KASINÃO</Logo>

        <Cash>
          <p>R$</p>
          <p>{cash.toFixed(2).replace('.', ',')}</p>
        </Cash>
      </Container>
    </>
  )
}
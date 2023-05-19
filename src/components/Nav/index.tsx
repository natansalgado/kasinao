import { Container, Logo, Button, Buttons, User, Name, Cash, Add } from "./styles"

export const Nav = () => {
  return (
    <Container>
      <Logo>BET</Logo>

      <Buttons>
        <Button>Mine</Button>
        <Button>Double</Button>
        <Button>Crash</Button>
      </Buttons>

      <User>
        <Name>Carlos</Name>
        <Cash>R$ 123</Cash>
        <Add>+</Add>
      </User>

    </Container>
  )
}
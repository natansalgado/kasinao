import { Container, Header, Section, Label, Input, Button, Modal } from './styles'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { addCash, changeUserName } from '../../UserSlice'

export const Settings = () => {
  const { name } = useAppSelector(state => state.user)
  const [userName, setUserName] = useState(name)
  const [value, setValue] = useState(0)
  const [message, setMessage] = useState('')

  const dispatch = useAppDispatch()

  const changeName = () => {
    if (userName.length < 3) {
      setMessage('NOME DEVE CONTER PELO MENOS 3 CARACTERES')
      return
    }
    dispatch(changeUserName(userName))
    setMessage('NOME ATUALIZADO COM SUCESSO')
  }

  const depositMoney = () => {
    if (!name) {
      setMessage('REGISTRE UM NOME PARA COMEÇAR')
      return
    }

    if (message === 'PROCESSANDO PAGAMENTO...') {
      return
    }

    if (value < 20) {
      setMessage('DEPÓSITO MINIMO DE R$ 20,00')
      return
    }

    setValue(0)
    setMessage('PROCESSANDO PAGAMENTO...')
    setTimeout(() => {
      setMessage('PAGAMENTO EFETUADO COM SUCESSO')
      dispatch(addCash(value))
    }, 3000)
  }

  return (
    <Container>
      <Header>
        <h1>CONFIGURAÇÕES</h1>
      </Header>
      <Section>
        <Label htmlFor="name">Nome</Label>
        <Input type='letter' id='name' value={userName} onChange={e => setUserName(e.target.value)} />
        <Button onClick={changeName}>SALVAR</Button>
      </Section>
      <Section>
        <Label htmlFor="value">DEPOSITAR NA CONTA R$</Label>
        <Input type='number' id='value' value={value} onChange={e => setValue(Number(e.target.value))} />
        <p>FORMA DE PAGAMENTO</p>
        <Button onClick={depositMoney}>PIX</Button>
        <Button onClick={depositMoney}>CARTÃO</Button>
      </Section>
      {message &&
        <Modal className='payment'>{message}</Modal>
      }
    </Container>
  )
}
import { useState, useEffect, ChangeEvent } from "react"
import { Container, Section, Bet, Infos, Main, Label, Input, Footer, Button, Game, Spot, Modal } from "./styles"

import { useAppSelector, useAppDispatch } from "../../hooks"
import { removeCash, addCash } from "../../UserSlice"

interface Board {
  id: number
  content: string
  turned: boolean
}

export const Mine = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [canPlay, setCanPlay] = useState(false)
  const [bombs, setBombs] = useState(5)
  const [value, setValue] = useState(1)
  const [board, setBoard] = useState<Board[]>([])
  const [modal, setModal] = useState(`x${bombs * 0.05 + 1}`)
  const [times, setTimes] = useState(1)

  const { cash } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const changeBombs = (e: ChangeEvent<HTMLInputElement>) => {
    const multiplier = (Number(e.target.value) * 0.05).toFixed(2)
    setBombs(Number(e.target.value))
    setModal(`x${Number(multiplier) + 1}`)
  }

  const turnSpot = (index: number, isTurned: boolean, content: string) => {
    if (!canPlay) return
    if (isTurned) return
    if (content === 'bomb') {
      setCanPlay(false)
      setModal('😭 PERDEU! 😭')
      setTimes(1)
    }
    const multiplier = bombs * 0.05
    const boardCopy = JSON.parse(JSON.stringify(board))
    boardCopy[index].turned = !boardCopy[index].turned
    setBoard(boardCopy)
    if (content === 'diamond') {
      setTimes(times + 1)
      setModal(`x${(multiplier * times + 1).toFixed(2)} | R$ ${value + (value * multiplier * times)}`)
    }
  }

  const startGame = () => {
    if (bombs < 5) {
      setModal('MÍNIMO DE 5 BOMBAS')
      return
    }

    if (bombs > 24) {
      setModal('MÁXIMO DE 24 BOMBAS')
      return
    }

    if (value < 1) {
      setModal('APOSTA MÍNIMA R$ 1')
      return
    }

    if (cash < value) {
      setModal('DINHEIRO INSUFICIENTE')
      return
    }

    setCanPlay(true)
    setModal('')
    dispatch(removeCash(value))
    const indexes: number[] = []
    const newBoard = []

    for (let i = 0; i < 25; i++) {
      newBoard.push({ id: i, content: "diamond", turned: false })
    }

    for (let i = 0; i < bombs; i++) {
      let number = Math.floor(Math.random() * 25)
      if (indexes.length > 0) {
        while (indexes.includes(number)) {
          number = Math.floor(Math.random() * 25)
        }
      }
      indexes.push(number)
      newBoard[number].content = 'bomb'
    }
    setBoard(newBoard)
  }

  const stopGame = () => {
    let diamonds = 0
    const multiplier = value * (bombs * 0.05)

    board.map(spot => {
      if (spot.turned) diamonds++
    })

    if (diamonds <= 0) {
      setModal('SELECIONE PELO MENOS UM')
      return
    }

    setTimes(1)
    setCanPlay(false)
    dispatch(addCash(value + (multiplier * diamonds)))
    setModal(`🤑 GANHOU R$ ${value + (multiplier * diamonds)} 🤑`)
  }

  useEffect(() => {
    const newBoard = []
    for (let i = 0; i < 25; i++) {
      newBoard.push({ id: i, content: "bomb", turned: false })
    }
    setBoard(newBoard)
  }, [])

  useEffect(() => {
    const updateWindowSize = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
    }
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  return (
    <Container>
      {width < 700 &&
        <Infos>
          <h1>MINE</h1>
          <p>Tente acertar onde os diamantes estão escondidos para ganhar.</p>
          <p>Quanto mais diamantes acertar, maior o prêmio.</p>
          <p>Quanto mais bombas no campo, maior o multiplicador do prêmio.</p>
        </Infos>
      }
      <Section>
        <Main>
          {width >= 700 &&
            <Infos>
              <h1>MINE</h1>
              <p>Tente acertar onde os diamantes estão escondidos para ganhar.</p>
              <p>Quanto mais diamantes acertar, maior o prêmio.</p>
              <p>Quanto mais bombas no campo, maior o multiplicador do prêmio.</p>
            </Infos>
          }
          <Bet>
            <Label htmlFor="value">Valor da aposta R$</Label>
            <Input id="value" type="number" value={value} disabled={canPlay} onChange={e => setValue(Number(e.target.value))} />
            <Label htmlFor="bombs">Quantidade de bombas</Label>
            <Input id="bombs" type="number" value={bombs} disabled={canPlay} onChange={changeBombs} />
          </Bet>
        </Main>
        <Game>
          {board.map((spot) =>
            <Spot key={spot.id}
              className={spot.turned ? "turned" : canPlay ? "back" : ''}
              onClick={() => turnSpot(spot.id, spot.turned, spot.content)}
            >
              {spot.turned ?
                spot.content === 'bomb' ? '💣' :
                  spot.content === 'diamond' && '💎'
                : 'K'
              }
            </Spot>
          )}
        </Game>
      </Section>
      <Footer>
        {canPlay ?
          <Button onClick={stopGame}>PARAR</Button>
          :
          <Button onClick={startGame}>INICIAR</Button>
        }
        <Modal>{modal}</Modal>
      </Footer>
    </Container>
  )
}
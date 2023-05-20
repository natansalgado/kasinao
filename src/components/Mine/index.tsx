import { useState, useEffect, ChangeEvent } from "react"
import { Container, Section, Bet, Infos, Main, Label, Input, Footer, Button, Game, Spot, Modal } from "./styles"

interface Board {
  content: string,
  turned: boolean
}

export const Mine = () => {
  const [canPlay, setCanPlay] = useState(false)
  const [bombs, setBombs] = useState(5)
  const [value, setValue] = useState(1)
  const [board, setBoard] = useState<Board[]>([])
  const [modal, setModal] = useState(`x${bombs * 0.05}`)
  const [times, setTimes] = useState(1)

  const changeBombs = (e: ChangeEvent<HTMLInputElement>) => {
    const multiplier = (Number(e.target.value) * 0.05).toFixed(2)
    setBombs(Number(e.target.value))
    setModal(`x${multiplier}`)
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
      setModal(`x${multiplier * times} | R$ ${value + (value * multiplier * times)}`)
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

    setCanPlay(true)
    setModal('')
    const indexes: number[] = []
    const newBoard = []

    for (let i = 0; i < 25; i++) {
      newBoard.push({ content: "diamond", turned: false })
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

    if (diamonds <= 0) return

    setTimes(1)
    setCanPlay(false)
    setModal(`🤑 GANHOU R$ ${value + (multiplier * diamonds)} 🤑`)
  }

  useEffect(() => {
    const newBoard = []
    for (let i = 0; i < 25; i++) {
      newBoard.push({ content: "bomb", turned: false })
    }
    setBoard(newBoard)
  }, [])

  return (
    <Container>
      <Section>
        <Bet>
          <Infos>
            <h1>MINE</h1>
            <p>Tente acertar onde os diamantes estão escondidos para ganhar.</p>
            <p>Quanto mais diamantes acertar, maior o prêmio.</p>
            <p>Quanto mais bombas no campo, maior o multiplicador do prêmio.</p>
          </Infos>
          <Main>
            <Label htmlFor="value">Valor da aposta R$</Label>
            <Input id="value" type="number" min={1} value={value} disabled={canPlay} onChange={e => setValue(Number(e.target.value))} />
            <Label htmlFor="bombs">Quantidade de bombas</Label>
            <Input type="number" min={5} max={24} value={bombs} disabled={canPlay} onChange={changeBombs} />
          </Main>
        </Bet>
        <Game>
          {board.map((spot, index) =>
            <Spot key={index}
              className={!spot.turned && canPlay ? "back" : "turned"}
              onClick={() => turnSpot(index, spot.turned, spot.content)}
            >
              {spot.turned ?
                spot.content === 'bomb' ? '💣' :
                  spot.content === 'diamond' && '💎'
                : ''
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
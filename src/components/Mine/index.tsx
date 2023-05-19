import { useState, useEffect } from "react"
import { Container, Bet, Main, Label, Input, Footer, Start, Game, Spot } from "./styles"

interface Board {
  content: string,
  turned: boolean
}

export const Mine = () => {
  const [canPlay, setCanPlay] = useState(false)
  const [bombs, setBombs] = useState(4)
  const [board, setBoard] = useState<Board[]>([])

  const turnSpot = (index: number, isTurned: boolean, content: string) => {
    if (!canPlay) return
    if (isTurned) return
    if (content === 'bomb') {
      setTimeout(() => {
        alert('PERDEU')
      }, 100)
      setCanPlay(false)
    }
    const boardCopy = JSON.parse(JSON.stringify(board))
    boardCopy[index].turned = !boardCopy[index].turned
    setBoard(boardCopy)
  }

  const StartGame = () => {
    setCanPlay(true)
    const indexes = []
    const newBoard = []

    for (let i = 0; i < 25; i++) {
      newBoard.push({ content: "diamond", turned: false })
    }

    for (let i = 0; i < bombs; i++) {
      const number = Math.floor(Math.random() * 25)
      indexes.push(number)
      newBoard[i].content = 'bomb'
    }

    console.log(indexes);
    setBoard(newBoard)
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
      <Bet>
        <Main>
          <h1>MINE</h1>

          <Label htmlFor="value">Valor da aposta</Label>
          <Input id="value" type="number" min={1} value={1} />
          <Label htmlFor="bombs">Quantidade de bombas</Label>
          <Input type="number" min={5} max={24} defaultValue={5} onChange={e => setBombs(Number(e.target.value))} />
        </Main>
        <Footer>
          <Start onClick={StartGame}>INICIAR</Start>
        </Footer>
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
    </Container>
  )
}
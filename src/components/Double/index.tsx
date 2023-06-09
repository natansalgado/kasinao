import { useState, useEffect } from "react"
import { Container, Section, Bet, Infos, Main, Label, Input, Buttons, Footer, Button, Game, History, LoadingOut, LoadingIn, ArrowTop, ArrowBottom, Carousel, Square, Modal } from "./styles"

import { useAppSelector, useAppDispatch } from "../../hooks"
import { removeCash, addCash } from "../../UserSlice"
import { colors as colorsConst } from '../../styles/global'

interface Board {
  id: number
  name: string
  color: string
}

export const Double = () => {
  const { red, black, white } = colorsConst
  const [colorsDefault] = useState(['red', 'black', 'red', 'black', 'red', 'black', 'white'])
  const [history, setHistory] = useState([])
  const [colors, setColors] = useState<string[]>([])
  const [width, setWidth] = useState(window.innerWidth)
  const [canPlay, setCanPlay] = useState(true)
  const [value, setValue] = useState(1)
  const [board, setBoard] = useState<Board[]>([])
  const [modal, setModal] = useState('')
  const [move, setMove] = useState(0)
  const [reseting, setReseting] = useState(false)
  const [actived, setActived] = useState('')
  const [percentage, setPercentage] = useState(0)

  const { cash } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const startGame = () => {
    if (!canPlay) {
      return
    }

    if (value < 1) {
      setModal('APOSTA MÍNIMA R$ 1')
      return
    }

    if (!actived) {
      setModal('SELECIONE UMA COR')
      return
    }

    if (cash < value) {
      setModal('DINHEIRO INSUFICIENTE')
      return
    }

    setPercentage(100)
    setTimeout(() => {
      setPercentage(0)
    }, 1)

    setModal('')
    setReseting(false)
    setCanPlay(false)
    let random = Math.floor(Math.random() * colors.length)
    while (random < 20 || random >= colors.length - 5) {
      random = Math.floor(Math.random() * colors.length)
    }

    if (width > 700) {
      setMove((random) * 99.2)
    } else {
      setMove(((random) * (width - 4)) / 5)
    }
    dispatch(removeCash(value))

    const colorWinner = colors[random + 2]
    const multiplier = colorWinner === 'white' ? 14 : 2
    const valueEarned = value * multiplier
    const formated = valueEarned.toFixed(2).replace('.', ',')
    const historyCopy = JSON.parse(JSON.stringify(history))
    historyCopy.push(colorWinner)
    if (historyCopy.length > 16) {
      historyCopy.splice(0, 1)
    }

    setTimeout(() => {
      if (actived === colorWinner) {
        setModal(`🤑 Ganhou R$ ${formated} 🤑`)
        dispatch(addCash(valueEarned))
      } else {
        setModal('😭 PERDEU! 😭')
      }
      setHistory(historyCopy)
      setPercentage(100)
      setTimeout(() => {
        setPercentage(0)
      }, 20)
    }, 5000)

    setTimeout(() => {
      setReseting(true)
      setMove(0)
      setCanPlay(true)
      setActived('')
    }, 10000)
  }

  useEffect(() => {
    if (colors.length > 0) {
      const newBoard = []
      setMove(0)
      for (let i = 0; i < colors.length; i++) {
        let color = '#ffffff'
        if (colors[i] === 'red') color = red
        if (colors[i] === 'black') color = black
        if (colors[i] === 'white') color = white
        newBoard.push({ id: i, name: colors[i], color })
      }
      setBoard(newBoard)
    } else {
      const array = []
      for (let i = 0; i < 10; i++) {
        array.push(...colorsDefault)
      }
      setColors(array)
    }
  }, [colors, colorsDefault, red, black, white])

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
      {width < 800 &&
        <Infos>
          <h1>DOUBLE</h1>
          <p>Tente acertar onde a roleta vai parar.</p>
          <p>Vemelho bônus de 2x</p>
          <p>Preto bônus de 2x</p>
          <p>Branco bônus de 14x</p>
        </Infos>
      }
      <Section>
        <Main>
          {width >= 800 &&
            <Infos>
              <h1>DOUBLE</h1>
              <p>Tente acertar onde a roleta vai parar.</p>
              <p>Vemelho bônus de 2x</p>
              <p>Preto bônus de 2x</p>
              <p>Branco bônus de 14x</p>
            </Infos>
          }
          <Bet>
            <Label htmlFor="value">Valor da aposta R$</Label>
            <Input id="value" type="number" value={value} disabled={!canPlay} onChange={e => setValue(Number(e.target.value))} />
            <Label htmlFor="bombs">Escolha uma cor</Label>
            <Buttons>
              <Button disabled={!canPlay} actived={actived === 'red' ? 'true' : 'false'} color={red} onClick={() => canPlay && setActived('red')}>K</Button>
              <Button disabled={!canPlay} actived={actived === 'black' ? 'true' : 'false'} color={black} onClick={() => canPlay && setActived('black')}>K</Button>
              <Button disabled={!canPlay} actived={actived === 'white' ? 'true' : 'false'} color={white} onClick={() => canPlay && setActived('white')}>K</Button>
            </Buttons>
          </Bet>
        </Main>
        <Game>
          <ArrowTop />
          <ArrowBottom />
          <div className="ghost" />
          <Carousel move={move} className={`${reseting && 'reseting'}`}>
            {board.map((spot) =>
              <Square key={spot.id} color={spot.color}>K</Square>
            )}
          </Carousel>
          <LoadingOut>
            <LoadingIn percentage={percentage} />
          </LoadingOut>
          <p>HISTÓRICO</p>
          <History>
            {history.map((color, index) =>
              <Square key={index} className="history" color={color === 'red' ? red : color === 'black' ? black : white}>K</Square>
            )}
          </History>
        </Game>
      </Section>
      <Footer>
        <Button disabled={!canPlay} className={`${!canPlay && 'cantPlay'}`} onClick={startGame}>INICIAR</Button>
        <Modal>{modal}</Modal>
      </Footer>
    </Container>
  )
}
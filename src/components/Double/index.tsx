import { useState, useEffect, ChangeEvent } from "react"
import { Container, Section, Bet, Infos, Main, Label, Input, Footer, Button, Game, Arrow, Carousel, Square, Modal } from "./styles"

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
  const [colors, setColors] = useState<string[]>([])
  const [width, setWidth] = useState(window.innerWidth)
  const [canPlay, setCanPlay] = useState(true)
  const [value, setValue] = useState(1)
  const [board, setBoard] = useState<Board[]>([])
  const [modal, setModal] = useState('')
  const [move, setMove] = useState(0)
  const [reseting, setReseting] = useState(false)

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

    // if (cash < value) {
    //   setModal('DINHEIRO INSUFICIENTE')
    //   return
    // }
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

    setModal(`${colors[random + 2]}`)
    dispatch(removeCash(value))

    setTimeout(() => {
      setReseting(true)
      setMove(0)
      setCanPlay(true)
    }, 6000)
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
          <p>Preto = 2x</p>
          <p>Vemelho = 2x</p>
          <p>Branco = 14x</p>
        </Infos>
      }
      <Section>
        <Main>
          {width >= 800 &&
            <Infos>
              <h1>DOUBLE</h1>
              <p>Tente acertar onde a roleta vai parar.</p>
              <p>Preto = 2x</p>
              <p>Vemelho = 2x</p>
              <p>Branco = 14x</p>
            </Infos>
          }
          <Bet>
            <Label htmlFor="value">Valor da aposta R$</Label>
            <Input id="value" type="number" min={1} value={value} disabled={canPlay} onChange={e => setValue(Number(e.target.value))} />
            <Label htmlFor="bombs">Escolha uma cor</Label>
          </Bet>
        </Main>
        <Game>
          <Arrow />
          <Carousel move={move} className={`${reseting && 'reseting'}`}>
            {board.map((spot) =>
              <Square key={spot.id} color={spot.color}>K</Square>
            )}
          </Carousel>
        </Game>
      </Section>
      <Footer>
        <Button className={`${!canPlay && 'cantPlay'}`} onClick={startGame}>INICIAR</Button>
        <Modal>{modal}</Modal>
      </Footer>
    </Container>
  )
}
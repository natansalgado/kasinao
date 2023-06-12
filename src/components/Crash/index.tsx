import { useState, useEffect } from "react"
import { Container, Section, Bet, Infos, Main, Label, Input, Check, Footer, Button, Game, Display, Graphic, Counter, Modal } from "./styles"

import { useAppSelector, useAppDispatch } from "../../hooks"
import { removeCash, addCash } from "../../UserSlice"

export const Crash = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [canPlay, setCanPlay] = useState(true)
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState(1)
  const [modal, setModal] = useState(``)
  const [auto, setAuto] = useState(false)
  const [autoValue, setAutoValue] = useState(1)
  const [playing, setPlaying] = useState(false)
  const [stopedAt, setStopedAt] = useState(0)
  const [color, setColor] = useState('#ffffff')
  const [height, setHeight] = useState(0)

  const { cash } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const startGame = async () => {

    if (value < 1) {
      setModal('APOSTA MÍNIMA R$ 1')
      return
    }

    if (cash < value) {
      setModal('DINHEIRO INSUFICIENTE')
      return
    }

    const maxArray = [Math.random(), Math.random() * 10]
    const counterMax = maxArray[Math.floor(Math.random() * maxArray.length)]

    setColor("#00ac00")
    setStopedAt(0)
    setPlaying(true)
    setCanPlay(false)
    setModal('')
    dispatch(removeCash(value))

    for (let i = 0; i <= counterMax; i = i + 0.01) {
      setTimeout(() => {
        setCounter(i)
        setHeight(i)
        if (i >= counterMax - 0.01) {
          setColor("#a00000")
          setPlaying(false)
        }
      }, 2000 * i)
    }
  }

  const stopGame = () => {
    const stoped = JSON.parse(JSON.stringify(counter))
    const valueEarned = (value * stoped).toFixed(2).replace('.', ',')
    setCanPlay(true)
    dispatch(addCash(value * counter))
    setModal(`🤑 GANHOU R$ ${valueEarned} 🤑`)
    setStopedAt(stoped)
  }

  useEffect(() => {
    const updateWindowSize = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
    }
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  useEffect(() => {
    if (!playing && !canPlay) {
      setModal('😭 PERDEU! 😭')
      setCanPlay(true)
      setStopedAt(0)
    }

    if (auto && counter.toFixed(2) === autoValue.toFixed(2) && !canPlay) {
      const stoped = JSON.parse(JSON.stringify(counter))
      const valueEarned = (value * stoped).toFixed(2).replace('.', ',')
      setCanPlay(true)
      dispatch(addCash(value * counter))
      setModal(`🤑 GANHOU R$ ${valueEarned} 🤑`)
      setStopedAt(stoped)
    }

  }, [playing, canPlay, stopedAt, counter, auto, autoValue, dispatch, value])

  return (
    <Container>
      {width < 700 &&
        <Infos>
          <h1>CRASH</h1>
          <p>Tente acertar quando o multiplicador vai crashar.</p>
          <p>Pare antes do crash para multiplicar seu dinheiro.</p>
        </Infos>
      }
      <Section>
        <Main>
          {width >= 700 &&
            <Infos>
              <h1>CRASH</h1>
              <p>Tente acertar quando o multiplicador vai crashar.</p>
              <p>Pare antes do crash para multiplicar seu dinheiro.</p>
            </Infos>
          }
          <Bet>
            <Label htmlFor="value">Valor da aposta R$</Label>
            <Input id="value" type="number" value={value} disabled={!canPlay || playing} onChange={e => setValue(Number(e.target.value))} />
            <Label htmlFor="autostop">PARAR AUTOMATICO EM</Label>
            <div>
              <Input id="autostop" type="number" value={autoValue} disabled={!auto || !canPlay || playing} onChange={({ target }) => setAutoValue(Number(target.value))} />
              <Check disabled={!canPlay || playing} check={auto.toString()} onClick={() => setAuto(!auto)}>
                {auto && 'X'}
              </Check>
            </div>
          </Bet>
        </Main>
        <Game>
          <Display>
            <Counter color={color}>{counter.toFixed(2)}</Counter>
            {stopedAt !== 0 &&
              <Counter>{stopedAt.toFixed(2)}</Counter>
            }
          </Display>
          <Graphic color={color} style={{ height: `${height * (width < 700 ? 22 : 32.5)}px`, borderBottomRightRadius: height < 0.10 ? 'none' : '100%' }} />
        </Game>
      </Section>
      <Footer>
        {canPlay ?
          <Button disabled={playing} onClick={startGame}>INICIAR</Button>
          :
          <Button onClick={stopGame}>PARAR</Button>
        }
        <Modal>{modal}</Modal>
      </Footer>
    </Container>
  )
}
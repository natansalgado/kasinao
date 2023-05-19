import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background, button, buttonHover } = colors

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #212121;
  height: 500px;
  max-width: 800px;
  margin: 10px auto;
  border: #333 solid 2px;
  border-radius: 10px;
`

export const Bet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  position: relative;

  height: 100%;
  width: 300px;

  h1 {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 36px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`

export const Label = styled.label`
  font-size: 20px;
  line-height: 40px;
`

export const Input = styled.input`
  background: #0007;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  text-align: center;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  background: ${background};
  padding: 5px 15px;
  border-bottom-left-radius: 10px ;
`

export const Start = styled.button`
  background: ${button};
  font-size: 20px;
  outline: none;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;

  @media (max-width: 600px) {
    font-size: 15px;
  }

  &:hover {
    background: ${buttonHover};
    scale: 1.1;
  }
`

export const Game = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: 100%;
  background: #212121;
  width: calc(100% - 300px);
  border-radius: 0 10px 10px 0;

  .back {
    transition: .2s;
    cursor: pointer;
    
    &:hover {
      scale: 1.1;
      filter: brightness(1.4);
    }
  }
`

export const Spot = styled.button`
  background: #111;
  height: calc(100% / 5);
  width: calc(100% / 5);
  font-size: 50px;
  border-radius: 10px;
  border: 2px #212121 solid;
`
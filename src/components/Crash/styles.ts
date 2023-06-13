import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background, button, buttonHover } = colors

interface Props {
  color?: string
  check?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #212121;
  max-width: 800px;
  margin: 10px auto;
  border: #333 solid 2px;
  border-radius: 10px;

  @media(max-width: 699px) {
    justify-content: space-between;
  }
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #252525;
  border-radius: 10px 10px 0 0;

  @media(max-width: 699px) {
    flex-direction: column-reverse;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 300px;

  @media(max-width: 699px) {
    width: 100%;
    justify-content: flex-end;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 10px;
  width: 100%;
  background: #252525;
  border-radius: 10px 0 0 0;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
    line-height: 18px;
  }

  @media(max-width: 699px) {
    gap: 5px;
    border-radius: 10px 10px 0 0;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }
`

export const Bet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  @media(max-width: 699px) {
    padding: 15px 10px;
  }
`

export const Label = styled.label`
  font-size: 18px;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;

  @media(max-width: 699px) {
    font-size: 16px;
    line-height: 30px;
  }
`

export const Input = styled.input`
  background: #0007;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  text-align: center;
  width: 100%;


  &:disabled {
    opacity: 0.7;
  }

  @media(max-width: 699px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Check = styled.button<Props>`
  height: 33px;
  width: 40px;
  color: ${background};
  font-weight: 800;
  font-size: 20px;
  background: #0007;
  border: ${({ check }) => check === 'true' ? `solid 2px ${background}` : 'none'};
  border-radius: 10px ;
  cursor: pointer;
  transition: scale .2s;

  &:hover {
    scale: 1.1;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
    scale: 1;
  }

  @media(max-width: 699px) {
    margin: 0;
    font-size: 18px;

    &:hover {
      scale: none;
    }

    &:disabled {
      &:active {
        scale: 1;
      }
    }

    &:active {
      scale: 1.1;
    }
  }
`

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  padding: 15px;
  height: 354px;
  position: relative;
  width: calc(100% - 300px);
  background: #212121;
  margin: 0 auto;
  border-top-right-radius: 10px;

  @media(max-width: 699px) {
    width: 100%;
    border-top-right-radius: 0;
    height: 250px;
  }
`
export const Display = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`

export const Counter = styled.h1<Props>`
  font-size: ${({ color }) => color ? '60px' : '40px'};
  color: ${({ color }) => color};
`

export const Graphic = styled.div<Props>`
  width: 100%;
  border-bottom: solid 3px ${({ color }) => color};
  border-right: solid 5px ${({ color }) => color};
`

export const Footer = styled.div`
  display: flex;

  overflow: hidden;
  width: 100%;
  background: ${background};
  border-radius: 0 0 10px 10px;
  padding: 5px 0;

  @media(max-width: 699px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 5px;
  }
`

export const Button = styled.button`
  background: ${button};
  font-size: 20px;
  outline: none;
  border: none;
  width: calc(300px - 30px);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  margin: 0 15px;
  font-weight: bold;

  &:disabled {
    cursor: default;
  }

  &:hover {
    background: ${buttonHover};
    scale: 1.1;

    &:disabled {
      background: ${button};
      scale: 1;
    }
  }

  @media(max-width: 699px) {
    width: 100%;
    margin: 0;
    font-size: 18px;

    &:hover {
      background: ${button};
      scale: 1;
    }

    &:active {
      background: ${buttonHover};
      scale: 1.1;
    }
  }
`

export const Modal = styled.span`
  margin: 0 auto;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  max-width: calc(100% - 270);

  @media(max-width: 699px) {
    min-height: 30px;
    font-size: 20px;
    line-height: 30px;
  }
`
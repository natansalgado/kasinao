import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background, button, buttonHover, black } = colors

interface Props {
  color?: string
  move?: number
  actived?: string
  percentage?: number
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

  @media(max-width: 799px) {
    flex-direction: column-reverse;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 300px;

  @media(max-width: 799px) {
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

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 16px;
    line-height: 18px;
  }

  @media(max-width: 699px) {
    gap: 5px;

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

  @media(max-width: 799px) {
    padding: 15px 10px;
  }
`

export const Label = styled.label`
  font-size: 18px;
  line-height: 40px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;

  @media(max-width: 799px) {
    font-size: 16px;
    line-height: 40px;
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

  &:disabled {
    opacity: 0.7;
  }

  @media(max-width: 799px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Game = styled.div`
  display: flex;
  flex-direction: column;


  height: 100%;
  background: #212121;
  width: 100%;
  overflow: hidden;
  position: relative;

  .reseting {
    transition: none;
  }

  .ghost {
    height: 100px;
    width: 100%;

    @media(max-width: 799px) {
      height: calc((100vw - 4px) / 5);
    }
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    font-weight: bold;
  }

  .history {
    width: 31.02px;
    height: 31.02px;
    min-width: 1px;

    border-radius: 5px;
    border: 1px solid #333;
    font-size: 10px;

    @media(max-width: 799px) {
      height: calc(100vw / 16);
      width: calc(100vw / 16);
      font-size: calc(100vw / 16 / 2.5);
    }
  }
`

export const History = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 31.01px;
  background: #333;

  @media(max-width: 799px) {
    height: calc(100vw / 16);
  }
`

export const LoadingOut = styled.div`
  height: 3px;
  width: 100%;
  background: #333;
`

export const LoadingIn = styled.div<Props>`
  height: 100%;
  width: ${({ percentage }) => percentage + '%'};
  border-radius: 5px;
  background: ${background};
  transition: ${({ percentage }) => percentage === 100 ? 'none' : 'all 5s linear'};
`

export const ArrowTop = styled.div`
  height: 20px;
  width: 20px;
  background: #333;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  border-radius: 0 0 10px 10px;
  border: #333 2px solid;

  @media(max-width: 799px) {
    transform: translate(-50%);
    height: calc(100vw / 5 / 6);
    width: calc(100vw / 5 / 6);
  }
`

export const ArrowBottom = styled.div`
  height: 20px;
  width: 20px;
  background: #333;
  margin: 0 auto;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  border-radius: 10px 10px 0 0;
  border: #333 2px solid;

  @media(max-width: 799px) {
    height: calc(100vw / 5 / 6);
    width: calc(100vw / 5 / 6);
    top: calc(((100vw - 4px) / 5) - (100vw / 5 / 6));
  }
`

export const Carousel = styled.div<Props>`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  left: -${props => props.move}px;
  transition: all 5s ease-out;
  background: #333;
`

export const Square = styled.button<Props>`
  background: ${({ color }) => color};
  font-weight: 800;
  color: ${({ color }) => color === black ? '#ffffff20' : '#00000030'};
  height: 100px;
  min-width: 99.2px;
  font-size: 24px;
  border-radius: 10px;
  border: 2px #333 solid;
  
  @media(max-width: 799px) {
    font-size: calc(100vw / 5 / 4);
    min-width: 0px;
    width: calc((100vw - 4px) / 5);
    height: calc((100vw - 4px) / 5);
  }
`

export const Footer = styled.div`
  display: flex;
  overflow: hidden;

  width: 100%;
  background: ${background};
  border-radius: 0 0 10px 10px;
  padding: 5px 0;

  @media(max-width: 799px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 5px;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

export const Button = styled.button<Props>`
  background: ${({ color }) => color ? color : button};
  font-size: 20px;
  outline: none;
  border: ${({ color, actived }) => color ? actived === 'true' ? `2px ${background} solid` : '2px #404040 solid' : 'none'};
  width: calc(300px - 30px);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  margin: ${({ color }) => color ? 0 : '0 15px'};
  font-weight: ${({ color }) => color ? 800 : 'bold'};
  color: ${({ color }) => color ? color === black ? '#ffffff20' : '#00000030' : '#fff'};

  &:hover {
    background: ${({ color }) => color ? color : buttonHover};
    scale: 1.1;

    &:disabled {
      background: ${({ color }) => color ? color : button};
      scale: 1;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

  @media(max-width: 799px) {
    width: 100%;
    margin: 0;
    font-size: 18px;

    &:hover {
      background: ${({ color }) => color ? color : button};
      scale: 1;
    }

    &:active {
      background: ${({ color }) => color ? color : buttonHover};
      scale:  1.1;
    }
  }
`

export const Modal = styled.span`
  height: 100%;
  margin: 0 auto;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  max-width: calc(100 % - 270);

  @media(max-width: 799px) {
    min-height: 30px;
    font-size: 20px;
    line-height: 30px;
  }
`
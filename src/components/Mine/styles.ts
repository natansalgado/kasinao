import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background, button, buttonHover } = colors

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
  width: 100%;
  height: 500px;
  background: #252525;
  border-radius: 10px 10px 0 0;

  @media(max-width: 699px) {
    flex-direction: column-reverse;
    height: auto;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
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

  @media(max-width: 699px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const Game = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: 100%;
  background: #212121;
  width: calc(100% - 300px);
  border-radius: 0 10px 10px 0;

  .turned {
    font-size: 40px;
    color: #fff;

    &:hover {
      scale: 1;
    }
  }

  .back {
    transition: .2s;
    cursor: pointer;
    

    &:hover {
      scale: 1.1;
      filter: brightness(1.4);
    }

    @media(max-width: 699px) {
      &:hover {
        scale: 1;
        filter: brightness(1);
      }
    }
  }

  @media(max-width: 699px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
    height: 100vw;
  }
`

export const Spot = styled.button`
  background: #111;
  height: calc(100% / 5);
  width: calc(100% / 5);
  border-radius: 10px;
  border: 2px #212121 solid;

  font-size: 20px;
  color: #ffffff20;
  font-weight: 800;

  @media(max-width: 699px) {
    font-size: calc(100vw / 5 / 5);
  }
`

export const Footer = styled.div`
  display: flex;

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

  &:hover {
    background: ${buttonHover};
    scale: 1.1;
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
  height: 100%;
  margin: 0 auto;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  max-width: calc(100% - 270);

  @media(max-width: 699px) {
    font-size: 20px;
    line-height: 30px;
  }
`
import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background } = colors

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

export const Header = styled.div`
  padding: 15px 10px 0 10px;
  width: 100%;

  h1 {
    font-size: 40px;

    @media(max-width: 699px) {
      font-size: 30px;
    }

    @media(max-width: 290px) {
      font-size: 28px;
    }
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 15px;
  
  p {
    margin-top: 10px;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    @media(max-width: 699px) {
      font-size: 16px;
    }
  }

  .payment {
    text-align: center;
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
  padding: 10px 10px;
  border-radius: 10px;
  text-align: center;
`

export const Button = styled.button`
  background: ${background};
  font-size: 20px;
  outline: none;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: .2s;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    filter: brightness(1.2);
    scale: 1.03;
  }

  @media(max-width: 699px) {
    &:hover {
      filter: brightness(1.2);
      scale: 1;
    }

    &:active {
      filter: brightness(1.2);
      scale: 1.08;
    }
  }
`

export const Modal = styled.span`
  background: ${background};
  width: 100%;
  text-align: center;
  font-size: 25px;
  border-radius: 0 0 10px 10px;
  padding: 10px;
  font-weight: bold;
`
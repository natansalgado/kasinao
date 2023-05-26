import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background, button, primary, buttonHover } = colors

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: wrap;

  background: ${background};
  width: 100%;
  padding: 5px 10px;
`

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`

export const Button = styled.button`
  background: ${button};
  font-size: 20px;
  outline: none;
  border: none;
  padding: 10px 15px;
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

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Name = styled.p`
  background: ${primary};
  padding: 10px 0 10px 15px;
  font-size: 20px;
  border-radius: 10px 0 0 10px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`

export const Cash = styled.p`
  background: ${primary};
  padding: 10px 10px;
  font-size: 20px;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`

export const Settings = styled.button`
  background: ${button};
  padding: 12px 15px 8px 10px;
  outline: none;
  border: none;
  font-size: 19.2px;
  transition: .2s;
  cursor: pointer;
  border-radius: 0 10px 10px 0;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  &:hover {
    background: ${buttonHover};
    scale: 1.1;
    outline: none;
    border: none;
  }
`
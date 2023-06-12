import styled from 'styled-components'
import { colors } from '../../styles/global'

const { background, primary } = colors

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  flex-wrap: wrap;

  position: sticky;
  top: 0;

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
  background: transparent;
  padding-top: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .2s;

  &:hover {
    scale: 1.1;
  }
`

export const Cash = styled.p`
  display: flex;
  justify-content: space-between;
  background: ${primary};
  padding: 10px;
  font-size: 20px;
  width: 155px;
  white-space: nowrap;
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 15px;
    width: 122px;
  }
`
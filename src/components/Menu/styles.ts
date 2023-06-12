import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 54px;
  background: #000a;
  width: 100%;
  z-index: 99;

  @media (max-width: 600px) {
    top: 47px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #000;
  height: calc(100vh - 53px);
  width: fit-content;
  border-right: 2px #fff2 solid;
  padding: 5px 20px;
  gap: 10px;

  @media (max-width: 600px) {
    height: calc(100vh - 47px);
  }
`

export const Button = styled.button`
  background: transparent;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .2s;
  text-transform: uppercase;
  font-weight: 800;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  &:hover {
    scale: 1.1;
  }
`
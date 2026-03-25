import styled from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  padding-top: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    padding-top: 136px;
    width: 540px;
    height: 80px;
    font-size: 36px;
    color: ${Cores.laranja};
    font-weight: 900;
    font-family: Roboto, sans-serif;
  }
`

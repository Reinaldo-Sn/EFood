import styled from 'styled-components'
import { colors } from '../../styles'

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
    max-width: 100%;
    font-size: 36px;
    color: ${colors.orange};
    font-weight: 900;
    font-family: Roboto, sans-serif;

    @media (max-width: 768px) {
      font-size: 24px;
      padding-top: 80px;
      width: 100%;
    }
  }
`

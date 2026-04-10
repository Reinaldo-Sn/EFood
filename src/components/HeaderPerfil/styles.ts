import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

export const Image = styled.div`
  background-image: url(${fundo});
  height: 176px;
  padding: 64px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const HeaderInfo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
    font-weight: 900;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 18px;
`

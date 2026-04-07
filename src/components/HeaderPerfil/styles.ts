import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

export const Image = styled.div`
  background-image: url(${fundo});
  height: 176px;
  padding: 64px;
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
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 18px;
`

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  $variant: 'primary' | 'secondary'
}

export const ButtonInfo = styled.button<Props>`
  background-color: ${(props) =>
    props.$variant === 'primary' ? colors.white : colors.orange};
  color: ${(props) =>
    props.$variant === 'primary' ? colors.orange : colors.white};

  display: inline-block;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  text-align: center;
  cursor: pointer;
`

export const ButtonLink = styled(Link)<Props>`
  background-color: ${(props) =>
    props.$variant === 'primary' ? colors.white : colors.orange};
  color: ${(props) =>
    props.$variant === 'primary' ? colors.orange : colors.white};
  display: inline-block;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`

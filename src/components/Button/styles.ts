import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cores } from "../../styles";

type Props = {
  $cores: 'primary' | 'secondary'
}

export const ButtonInfo = styled.button<Props>`

  background-color: ${((props) => props.$cores === 'primary' ? Cores.branca : Cores.laranja)};
  color: ${((props) => props.$cores === 'primary' ? Cores.laranja : Cores.branca)};

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
  background-color: ${((props) => props.$cores === 'primary' ? Cores.branca : Cores.laranja)};
  color: ${((props) => props.$cores === 'primary' ? Cores.laranja : Cores.branca)};
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

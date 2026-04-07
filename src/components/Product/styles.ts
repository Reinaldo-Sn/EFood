import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${colors.orange};

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  p {
    color: ${colors.white};
    font-weight: 400;
    font-size: 14px;
    padding: 8px 0;
    height: 150px;
  }

  h3 {
    padding-top: 8px;
    color: ${colors.white};
    font-weight: 900;
    font-size: 16px;
  }
`

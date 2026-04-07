import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${colors.orange};
  color: ${colors.orange};
  position: relative;
  overflow: hidden;

  > img {
    height: 220px;
    object-fit: cover;
  }

  img {
    width: 100%;
    display: block;
  }

  > div {
    padding: 8px;
  }
`

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;

  span {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 14px;
    }
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  display: block;
  line-height: 22px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  padding: 16px 0;
  margin: 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

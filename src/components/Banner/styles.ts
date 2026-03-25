import styled from "styled-components"
import fundoRestaurant from '../../assets/images/trattoria.png'

export const ImageRestaurant = styled.div`
  background-image: url(${fundoRestaurant});
  height: calc(280px + 176px);
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Categoria = styled.p`
  padding-top: 24px;
  color: #fff;
  font-weight: 100;
  font-size: 32px;
`

export const Title = styled.h2`
  padding-bottom: 32px;
  font-weight: 900;
  font-size: 32px;
  color: #fff;
`

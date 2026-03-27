import styled from 'styled-components'
import { Cores } from '../../styles'

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${Cores.laranja};

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  p {
    color: ${Cores.branca};
    font-weight: 400;
    font-size: 14px;
    padding: 8px 0;
    height: 150px;
  }

  h3 {
    padding-top: 8px;
    color: ${Cores.branca};
    font-weight: 900;
    font-size: 16px;
  }
  `

export const ModalCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  padding: 32px;
  background-color: ${Cores.laranja};
  z-index: 1;
  position: relative;

  img:last-child {
    height: 16px;
    width: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  img {
    height: 280px;
    width: 100%;
    object-fit: cover;
  }
`

export const ModalInfos = styled.div`
  padding-left: 24px;

  h3 {
    color: #fff;
    font-weight: 900;
    font-size: 18px;
  }

  p {
    color: #fff;
    padding-top: 16px;
    padding-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`

import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonInfo } from '../Button/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`

export const CardContainer = styled.div`
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colors.orange};
  width: 360px;
  height: 100%;
  z-index: 11;
`

export const CartItems = styled.ul`
  padding-top: 16px;

  > p {
    color: ${colors.white};
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-top: 24px;
    padding: 0 16px;
    line-height: 22px;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.white};
  margin: 16px 8px;
  padding: 8px;
  display: flex;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    margin-bottom: 4px;
    object-fit: cover;
  }

  img:last-child {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
    bottom: 4px;
    cursor: pointer;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
  }
`

export const SaleSection = styled.div`
  color: ${colors.white};
  padding: 0 16px;
  margin-top: 40px;

  div {
    display: flex;
    justify-content: space-between;

    h4 {
      color: ${colors.white};
      font-weight: bold;
      font-size: 14px;
    }

    p {
      color: ${colors.white};
      font-weight: bold;
      font-size: 14px;
    }
  }

  ${ButtonInfo} {
    width: 100%;
    margin-top: 16px;
  }
`

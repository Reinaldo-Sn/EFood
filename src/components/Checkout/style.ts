import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonInfo, ButtonLink } from '../Button/styles'

type InputGroupProps = {
  $maxWidth?: string
}

export const CheckoutOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`

export const CheckoutSection = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${colors.orange};
  padding: 32px 8px;
  z-index: 11;
  overflow-y: auto;
`
// estilização do Delivery, Payment, e Confirmation

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
  }

  p {
    color: ${colors.white};
    padding-bottom: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  p:first-child {
    margin-top: 16px;
  }

  ${ButtonInfo},
  ${ButtonLink} {
    margin-top: 8px;
  }
`

export const FormList = styled.ul`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    flex-direction: column;

    label {
      color: ${colors.white};
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 14px;
    }

    input {
      height: 32px;
      padding: 0 8px;
      width: 100%;
      font-size: 16px;
      background-color: ${colors.white};
      border: none;
      color: #000;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

  }
`

export const InputRow = styled.div`
  display: flex;
  gap: 32px;

  label {
    color: ${colors.white};
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    padding: 0 8px;
    width: 100%;
    font-size: 16px;
    background-color: ${colors.white};
    border: none;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.$maxWidth ? 'none' : 1)};
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : 'auto')};
`

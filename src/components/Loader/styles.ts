import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'

const drawCircle = keyframes`
  from { stroke-dashoffset: 126; }
  to   { stroke-dashoffset: 0; }
`

const drawCheck = keyframes`
  from { stroke-dashoffset: 40; }
  to   { stroke-dashoffset: 0; }
`

const drawX = keyframes`
  from { stroke-dashoffset: 30; }
  to   { stroke-dashoffset: 0; }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

type StatusProps = { $status: 'success' | 'error' }

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 100;
  animation: ${fadeIn} 0.2s ease;
`

export const Message = styled.p<StatusProps>`
  color: ${({ $status }) => ($status === 'success' ? colors.green : colors.red)};
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 16px;
  animation: ${fadeIn} 0.4s ease 0.85s both;
`

export const Circle = styled.circle<StatusProps>`
  fill: none;
  stroke: ${({ $status }) => ($status === 'success' ? colors.green : colors.red)};
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 126;
  stroke-dashoffset: 126;
  animation: ${drawCircle} 0.8s ease forwards;
`

export const Check = styled.polyline`
  fill: none;
  stroke: ${colors.green};
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  animation: ${drawCheck} 0.4s ease 0.85s forwards;
`

export const XLine = styled.line`
  stroke: ${colors.red};
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: ${drawX} 0.3s ease 0.85s forwards;
`

import styled from 'styled-components'

export const ProductItems = styled.ul`
  padding-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  padding-bottom: calc(120px - 32px);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProductItem = styled.li`
  margin-bottom: 32px;
`

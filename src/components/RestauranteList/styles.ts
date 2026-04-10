import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;
  margin-bottom: 72px;

  li {
    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
`

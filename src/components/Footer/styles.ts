import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffebd9;
  text-align: center;
  padding: 40px;
`

export const Logo = styled.img`
  height: 60px;
  width: 125px;
`

export const SocialLinks = styled.span`
  padding-top: 32px;
  padding-bottom: 80px;
  display: flex;
  gap: 8px;

  img {
    cursor: pointer;
  }
`

export const Sobre = styled.h5`
  width: 480px;
  max-width: 100%;
  font-weight: 400;
  font-size: 10px;
`

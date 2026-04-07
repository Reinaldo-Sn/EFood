import { FooterContainer, Logo, Sobre, SocialLinks } from './styles'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import logo from '../../assets/images/logo.png'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="logo" />
    <SocialLinks>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </SocialLinks>
    <Sobre>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Sobre>
  </FooterContainer>
)

export default Footer

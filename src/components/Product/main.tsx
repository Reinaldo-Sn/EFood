import { useState } from 'react'
import Button from '../Button/main'
import { ModalCard, ModalContent, ModalInfos, ProductCard } from './styles'
import close from '../../assets/images/close.png'

type Props = {
  image: string
  title: string
  description: string
  preco: number
  porcao: string
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ image, description, title, preco, porcao }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
  <>
    <ProductCard>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button cores="primary" type={'button'} title={'carinho'} onClick={() => setIsVisible(true)}>
        Adicionar ao carrinho
      </Button>
    </ProductCard>

    <ModalCard className={isVisible ? 'visivel' : ''}>
      <ModalContent className="container">
        <img src={image} alt={title} />
        <ModalInfos>
          <h3>{title}</h3>
          <p>
            {description}
          </p>
          <p>Serve: de {porcao}</p>
          <Button type={'button'} cores={'primary'} title={''}>
            Adicionar ao carrinho - R$ {formataPreco(preco)}
          </Button>
        </ModalInfos>
        <img src={close} alt="fechar a modal" onClick={() => setIsVisible(false)}/>
      </ModalContent>
      <div className="overlay" onClick={() => {setIsVisible(false)}}></div>
    </ModalCard>
  </>
  )
}

export default Product

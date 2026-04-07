import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../../store'
import { add } from '../../store/reducers/cart'
import { formataPreco } from '../../utils/format'
import Button from '../Button/main'
import Loader from '../Loader/main'

import { ProductCard } from './styles'
import { ModalCard, ModalContent, ModalInfos } from '../Modal/styles'

import close from '../../assets/images/close.png'

type Props = {
  product: Cardapio
  isVisible: boolean
  onClose: () => void
  onOpen: () => void
}

const Product = ({ product, onClose, onOpen, isVisible = false }: Props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [loaderStatus, setLoaderStatus] = useState<'success' | 'error' | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const addItem = () => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id)
    const status = alreadyInCart ? 'error' : 'success'
    setLoaderStatus(status)
    timerRef.current = setTimeout(() => {
      if (!alreadyInCart) {
        dispatch(add(product))
        onClose()
      }
      setLoaderStatus(null)
    }, 2000)
  }

  return (
    <>
      {loaderStatus && <Loader status={loaderStatus} />}
      <ProductCard>
        <img src={product.foto} alt={product.nome} />
        <h3>{product.nome}</h3>
        <p>{product.descricao}</p>
        <Button
          variant="primary"
          type={'button'}
          title={'mais detalhes do prato'}
          onClick={onOpen}
        >
          Mais detalhes
        </Button>
      </ProductCard>

      <ModalCard className={isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={product.foto} alt={product.nome} />
          <ModalInfos>
            <h3>{product.nome}</h3>
            <p>{product.descricao}</p>
            <p>Serve: de {product.porcao}</p>
            <Button
              type={'button'}
              variant={'primary'}
              title={''}
              onClick={addItem}
            >
              Adicionar ao carrinho - {formataPreco(product.preco)}
            </Button>
          </ModalInfos>
          <img src={close} alt="fechar a modal" onClick={onClose} />
        </ModalContent>
        <div className="overlay" onClick={onClose}></div>
      </ModalCard>
    </>
  )
}

export default Product

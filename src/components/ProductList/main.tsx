import type { Cardapio } from '../../models/Restaurant'
import Product from '../Product/main'
import { ProductItem, ProductItems } from './styles'

export type Props = {
  cardapio: Cardapio[]
}

const ProductList = ({ cardapio }: Props) => (
  <ProductItems className='container'>
    {cardapio.map((item) => (
      <ProductItem key={item.id}>
        <Product
          image={item.foto}
          title={item.nome}
          description={item.descricao}
        />
      </ProductItem>
    ))}
  </ProductItems >
)

export default ProductList

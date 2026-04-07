import { useState } from 'react'

import Product from '../Product/main'
import { ProductItem, ProductItems } from './styles'

export type Props = {
  cardapio: Cardapio[]
}

const ProductList = ({ cardapio }: Props) => {
  const [visibleProduct, setVisibleProduct] = useState<number | null>(null)

  return (
    <ProductItems className="container">
      {cardapio.map((item) => (
        <ProductItem key={item.id}>
          <Product
            product={item}
            isVisible={visibleProduct === item.id}
            onClose={() => setVisibleProduct(null)}
            onOpen={() => setVisibleProduct(item.id)}
          />
        </ProductItem>
      ))}
    </ProductItems>
  )
}

export default ProductList

import Products from '../../models/Products'
import Product from '../Product/main'
import { ProductItem, ProductItems } from './styles'

export type Props = {
  products: Products[]
}

const ProductList = ({ products }: Props) => (
  <ProductItems className='container'>
    {products.map((item) => (
      <ProductItem key={item.id}>
        <Product
          image={item.image}
          title={item.title}
          description={item.description}
        />
      </ProductItem>
    ))}
  </ProductItems >
)

export default ProductList

import Button from "../Button/main";
import { ProductCard } from "./styles";

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({image, description, title}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  return (
  <ProductCard>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{getDescription(description)}</p>
    <Button cores="primary" type={"link"} title={"carinho"}>
      Adicionar ao carrinho
    </Button>
  </ProductCard>
)
}

export default Product

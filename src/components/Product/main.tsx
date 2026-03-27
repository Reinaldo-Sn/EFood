import Button from "../Button/main";
import { ProductCard } from "./styles";

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({image, description, title}: Props) => (
  <ProductCard>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Button cores="primary" type={"link"} title={"carinho"}>
      Adicionar ao carrinho
    </Button>
  </ProductCard>
)


export default Product

import type { Restaurante } from "../../models/Restaurant";
import { Banner, Categoria, ImageRestaurant, Title } from "./styles";

type Props = {
  restaurante: Restaurante
}

const BannerHeader = ({ restaurante }: Props) => (
  <ImageRestaurant style={{ backgroundImage: `url(${restaurante.capa})`}}>
    <div className='container'>
      <Banner>
        <Categoria>{restaurante.tipo}</Categoria>
        <Title>{restaurante.titulo}</Title>
      </Banner>
    </div>
  </ImageRestaurant>
)

export default BannerHeader

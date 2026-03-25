import { Banner, Categoria, ImageRestaurant, Title } from "./styles";

const BannerHeader = () => (
  <ImageRestaurant>
    <div className='container'>
      <Banner>
        <Categoria>Italiana</Categoria>
        <Title>La Dolce Vita Trattoria</Title>
      </Banner>
    </div>
  </ImageRestaurant>
)

export default BannerHeader

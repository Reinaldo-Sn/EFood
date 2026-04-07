import * as S from './styles'

type Props = {
  restaurante: Restaurante
}

const BannerHeader = ({ restaurante }: Props) => (
  <S.ImageRestaurant style={{ backgroundImage: `url(${restaurante.capa})` }}>
    <div className="container">
      <S.Banner>
        <S.Categoria>{restaurante.tipo}</S.Categoria>
        <S.Title>{restaurante.titulo}</S.Title>
      </S.Banner>
    </div>
  </S.ImageRestaurant>
)

export default BannerHeader

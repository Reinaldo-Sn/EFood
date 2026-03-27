import Tag from '../Tag/main'
import { Card, Descricao, Infos, TitleSection } from './styles'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button/main'

type Props = {
  description: string
  image: string
  infos: string
  title: string
  rating: number
  id: string
}

const RestaurantCard = ({
  description,
  image,
  infos,
  title,
  rating,
  id,
}: Props) => {
  const getDescription = (descricao: string) => {
      if (descricao.length > 280) {
        return descricao.slice(0, 277) + '...'
      }
      return descricao
    }

  return (
  <Card>
    <img src={image} alt={title} />

    <div>
      <TitleSection>
        <h3>{title}</h3>
        <span>
          <span>{rating.toFixed(1)}</span>
          <img src={estrela} alt="estrela" />
        </span>
      </TitleSection>

      <Descricao>{getDescription(description)}</Descricao>

      <Button
        cores="secondary"
        type={'link'}
        to={`/perfil/${id}`}
        title={'Saiba mais'}
      >
        Saiba mais
      </Button>

      <Infos>
        <Tag description={infos} />
      </Infos>
    </div>
  </Card>
)
}

export default RestaurantCard

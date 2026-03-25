import Tag from '../Tag/main'
import { Card, Descricao, Infos, TitleSection } from './styles'
import estrela from '../../assets/images/estrela.png'
import Button from '../Button/main'

type Props = {
  description: string
  image: string
  infos: string[]
  title: string
  rating: number
}

const RestaurantCard = ({
  description,
  image,
  infos,
  title,
  rating,
}: Props) => (
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

      <Descricao>{description}</Descricao>

      <Button cores="secondary" type={'link'} to="/perfil" title={'Saiba mais'}>
        Saiba mais
      </Button>

      <Infos>
        {infos.map((item) => (
          <Tag key={item} description={item} />
        ))}
      </Infos>
    </div>
  </Card>
)

export default RestaurantCard

import Restaurant from '../../models/Restaurante'
import RestaurantCard from '../RestauranteCard/main'
import { List } from './styles'

export type Props = {
  restaurante: Restaurant[]
}

const RestaurantList = ({ restaurante }: Props) => (
  <List className="container">
    {restaurante.map((item) => (
      <li key={item.id}>
        <RestaurantCard
          description={item.description}
          image={item.image}
          infos={item.infos}
          title={item.title}
          rating={item.rating}
        />
      </li>
    ))}
  </List>
)

export default RestaurantList

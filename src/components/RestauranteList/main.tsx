import type { Restaurante } from '../../models/Restaurant'
import RestaurantCard from '../RestauranteCard/main'
import { List } from './styles'

export type Props = {
  restaurante: Restaurante[]
}

const RestaurantList = ({ restaurante }: Props) => (
  <List className="container">
    {restaurante.map((item) => (
      <li key={item.id}>
        <RestaurantCard
          description={item.descricao}
          image={item.capa}
          infos={item.tipo}
          title={item.titulo}
          rating={item.avaliacao}
          id={String(item.id)}/>
      </li>
    ))}
  </List>
)

export default RestaurantList

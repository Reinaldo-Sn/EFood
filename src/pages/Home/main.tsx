import { BeatLoader } from 'react-spinners'
import Hero from '../../components/Hero/main'
import RestaurantList from '../../components/RestauranteList/main'
import { useGetAllRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant, isError, isLoading } = useGetAllRestaurantsQuery()

  if (isLoading) return <BeatLoader />
  if (isError || !restaurant) return <p>Erro ao carregar restaurantes.</p>

  return (
    <>
      <Hero />
      <RestaurantList restaurante={restaurant ?? []} />
    </>
  )
}

export default Home

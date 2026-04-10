import { BeatLoader } from 'react-spinners'
import Hero from '../../components/Hero/main'
import RestaurantList from '../../components/RestauranteList/main'
import Footer from '../../components/Footer/main'
import { useGetAllRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant, isError, isLoading, isFetching } = useGetAllRestaurantsQuery()

  if (isLoading || isFetching) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#FFF8F2' }}>
      <BeatLoader color="#E66767" />
    </div>
  )
  if (isError || !restaurant) return <p>Erro ao carregar restaurantes.</p>

  return (
    <>
      <Hero />
      <RestaurantList restaurante={restaurant} />
      <Footer />
    </>
  )
}

export default Home

import { useEffect, useState } from 'react'

import Hero from '../../components/Hero/main'
import RestaurantList from '../../components/RestauranteList/main'
import type { Restaurante } from '../../models/Restaurant'

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurante={restaurant} />
    </>
  )
}

export default Home

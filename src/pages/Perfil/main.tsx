import { useParams } from 'react-router-dom'

import BannerHeader from '../../components/Banner/main'
import HeaderPerfil from '../../components/HeaderPerfil/main'
import ProductList from '../../components/ProductList/main'
import { useGetRestaurantQuery } from '../../services/api'
import { BeatLoader } from 'react-spinners'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante, isError, isLoading } = useGetRestaurantQuery(Number(id))

  if (isLoading) return <BeatLoader />
  if (isError || !restaurante) return <p>Erro ao carregar restaurante.</p>

  return (
    <>
      <HeaderPerfil />
      <BannerHeader restaurante={restaurante} />
      <ProductList cardapio={restaurante.cardapio} />
    </>
  )
}

export default Perfil

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BannerHeader from '../../components/Banner/main'
import HeaderPerfil from '../../components/HeaderPerfil/main'
import ProductList from '../../components/ProductList/main'
import type { Restaurante } from '../../models/Restaurant'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes`)
    .then(res => res.json())
    .then((res: Restaurante[]) => {
      const encontrado = res.find(r => r.id === Number(id))
      setRestaurante(encontrado ?? null)
    })
  }, [id])

  if (!restaurante) return <p>Carregando...</p>

  return (
  <>
    <HeaderPerfil />
    <BannerHeader restaurante={restaurante} />
    <ProductList cardapio={restaurante.cardapio} />
  </>
)
}

export default Perfil

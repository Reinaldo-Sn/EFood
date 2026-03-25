import Hero from "../../components/Hero/main";
import RestaurantList from "../../components/RestauranteList/main";

import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'
import type Restaurante from "../../models/Restaurante";
import Footer from "../../components/Footer/main";

const restaurantes: Restaurante[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    title: 'Hioki Sushi',
    infos: ['Destaque da seman', 'Japonesa'],
    rating: 4.9,
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    rating: 4.6,
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    rating: 4.6,
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    rating: 4.6,
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    rating: 4.6,
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    rating: 4.6,
  },
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurante={restaurantes}/>
    <Footer />
  </>
)

export default Home

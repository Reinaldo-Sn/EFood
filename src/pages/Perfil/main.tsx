import BannerHeader from "../../components/Banner/main";
import Footer from "../../components/Footer/main";
import HeaderPerfil from "../../components/HeaderPerfil/main";
import Products from "../../models/Products";
import marguerita from "../../assets/images/marguerita.png"
import ProductList from "../../components/ProductList/main";

const products: Products[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <BannerHeader />
    <ProductList products={products} />
    <Footer />
  </>

)

export default Perfil

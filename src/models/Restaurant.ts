export type Cardapio = {
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao?: boolean
}

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado: boolean
  cardapio: []
}

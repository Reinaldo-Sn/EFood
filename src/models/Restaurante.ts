class Restaurant {
  id: number
  description: string
  image: string
  infos: string[]
  title: string
  rating: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    rating: number
  ) {
    this.id = id
    this.description = description
    this. image = image
    this.infos = infos
    this.title = title
    this.rating = rating
  }
}

export default Restaurant



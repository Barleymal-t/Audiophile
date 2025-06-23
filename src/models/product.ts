export type Product = {
  id: number
  slug: string
  name: string
  image: ImageSet
  category: string
  categoryImage: ImageSet
  new: boolean
  price: number
  description: string
  features: string
  includes: IncludedItem[]
  gallery: {
    first: ImageSet
    second: ImageSet
    third: ImageSet
  }
  others: RelatedProduct[]
}

type ImageSet = {
  mobile: string
  tablet: string
  desktop: string
}

type IncludedItem = {
  quantity: number
  item: string
}

type RelatedProduct = {
  slug: string
  name: string
  image: ImageSet
}

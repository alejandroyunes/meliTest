export interface Author {
  name: string
  lastName: string
}

export interface Category {
  category: string
}

export interface Items {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
}


export interface Products {
  author: Author
  categories: Category[]
  items: Items[]
}


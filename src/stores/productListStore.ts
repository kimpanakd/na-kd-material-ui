import { asyncState, createStore } from 'global-hook-store'
import { productListApi } from '../services/fetchService'

export type ProductsType = {
  articleNumber: string
  badges: []
  bestPrice: { current: number; original: number; discountPercentage: null }
  brand: { identifier: string; name: string; logoUrl: string }
  color: { hexCodes: []; gradientPercentages: []; degreeAngle: number; patternUrl: null; names: [] }
  currency: string
  identifier: string
  images: string[]
  name: string
  siblings: []
  type: string
  variations: []
}

export type DataType = {
  brandRelevance: unknown[]
  categoryTree: unknown[]
  facets: unknown[]
  filters: unknown[]
  products: ProductsType[]
  sortOptions: unknown[]
  totalProductCount: number
}

const productListStore = createStore(
  {
    products: asyncState<DataType>(),
  },
  {
    getProductList: async (_state, _payload: null, { asyncAction }) =>
      asyncAction('products', productListApi.getData()),
  }
)

export { productListStore }

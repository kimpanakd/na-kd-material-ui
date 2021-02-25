import { asyncState, createStore } from 'global-hook-store'
import { categoriesApi } from '../services/fetchService'

export type DataType = {
  identifier: string
  productCount: number
  subCategories: DataType[]
  title: string
}

const categoriesStore = createStore(
  {
    data: asyncState<DataType[]>([]),
    menuOpen: false,
  },
  {
    getCategories: async (_state, _payload: null, { asyncAction }) => asyncAction('data', categoriesApi.getData()),
    toggleMenu: state => ({ ...state, menuOpen: !state.menuOpen }),
    closeMenu: state => ({ ...state, menuOpen: false }),
  }
)

export { categoriesStore }

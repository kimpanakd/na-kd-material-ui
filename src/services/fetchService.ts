import { setAuthTokens } from './authService'
import { DataType as CategoriesDataType } from '../stores/categoriesStore'
import { DataType as ProductListDataType } from '../stores/productListStore'

const ACCESS_TOKEN = localStorage.getItem('access_token') || ''

const genericFetch: <T>(url: string) => Promise<T> = url =>
  fetch(`/v1${url}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
      contentType: 'application/json',
    },
  }).then(response => {
    if (response.status === 401) {
      const newAccessToken = setAuthTokens(true)
      console.log(newAccessToken)
    }
    return response.json()
  })

export const categoriesApi = {
  getData: () => genericFetch<CategoriesDataType[]>(`/categories/?countryCode=SWE`),
}

export const productListApi = {
  getData: () =>
    genericFetch<ProductListDataType[]>(`/categories/1-32877/products/?countryCode=SWE&filters=[]&start=1&count=60`),
}

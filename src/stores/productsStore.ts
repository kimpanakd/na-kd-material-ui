import { createStore } from 'global-hook-store'

const productsStore = createStore(
  {},
  {
    getProducts: async () => {
      const ACCESS_TOKEN = localStorage.getItem('access_token')
      try {
        const response = await fetch(`/v1/categories/?countryCode=SWE`, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${ACCESS_TOKEN}`,
            contentType: 'application/json',
          },
        })
        const data = await response.json()
        return { ...data }
      } catch (err) {
        // TODO: catch the error for expired access_token and do a request with the refresh_token
      }
    },
  }
)

export { productsStore }

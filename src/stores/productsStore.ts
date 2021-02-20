import { createStore } from 'global-hook-store'
// type roductsTypes = {}

const productsStore = createStore(
  {},
  {
    getProducts: async () => {
      const response = await fetch(`https://api.feature1.na-kd.com/v1/products/1-1017-000076-0017/?countryCode=SWE`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsImtpZCI6IkE0NDVCMzA1MEUxMzZEREExMEU3NkJDRjk4NzdGNEQ2QTg2Q0YyREMiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJwRVd6QlE0VGJkb1E1MnZQbUhmMDFxaHM4dHcifQ.eyJuYmYiOjE2MTM5NDYwNDYsImV4cCI6MTYxMzk0OTY0NiwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5mZWF0dXJlMS5uYS1rZC5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5LmZlYXR1cmUxLm5hLWtkLmNvbS9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJkZXYiLCJzdWIiOiJhZG1pbiIsImF1dGhfdGltZSI6MTYxMzk0NjA0NiwiaWRwIjoibG9jYWwiLCJlbWFpbCI6Iml0QG5hLWtkLmNvbSIsImN1c3RvbWVyX2lkIjoiOGI0MTFjMjAtODk5MS00N2Y4LWI1ODYtODg4Mzk4Y2RhYWQzIiwicm9sZSI6WyJBZG1pbmlzdHJhdG9ycyIsIkJldGFUZXN0ZXJzIiwiV2ViQWRtaW5zIl0sImp0aSI6IkU1OTJBQzY2Njk0NTUzQjM2Mjg2Q0JDOEQ1QTIyMjIwIiwiaWF0IjoxNjEzOTQ2MDQ2LCJzY29wZSI6WyJjdXN0b21lcjpyZWFkIiwiY3VzdG9tZXI6d3JpdGUiLCJvcGVuaWQiLCJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.iP1LAl18KVXYDivf3k5tAbEvd1cS9OI_0t2FbR1U64b7ear1J1rNZ32SsKruGY0dA5kAfomudiJJA49uwzjNTOlhQ6JWSalOztDYWeHGFrY4P8seope-t9QH9d-qvw-FVY9Te8FnuYkto_vpF4kEl4I27RqijzO47f56z45V7Mi15mVXgHBMh0ml7EWgW3Lq2AlGLnAkNcdfFtzbwTs1gtS6Oy2LM8_KDTN879MMZGbcpqn8BywvDGyIModlID3QWRYxz1QbtOZJZwEXSIWyMz_leOrwkwxnnIKOBajDrQfUyFbGjQxQi53KRu8QCVz6HWD_I0tvUCi197qaCKuNqQ'}`,
          contentType: 'application/json',
        },
      })
      const data = await response.json()

      return { ...data }
    },
  }
)

export { productsStore }

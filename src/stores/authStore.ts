import { createStore } from 'global-hook-store'

export type tokensTypes = {
  access_token: string
  expires_in: number
  token_type: string
  refresh_token: string
  scope: string
}

const authStore = createStore({} as tokensTypes, {
  getAuthTokens: async () => {
    const response = await fetch('/connect/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: 'dev',
        client_secret: 'store',
        grant_type: 'password',
        username: 'it@na-kd.com',
        password: 'store',
      }),
      redirect: 'follow',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Connection: 'keep-alive',
      },
    })
    const data: tokensTypes = await response.json()

    return { ...data }
  },
})

export { authStore }

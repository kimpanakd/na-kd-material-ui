type TokenTypes = {
  access_token: string
  expires_in: number
  token_type: string
  refresh_token: string
  scope: string
}

export const setAuthTokens = async (refresh = false) => {
  const refreshBody = {
    client_id: 'dev',
    client_secret: 'store',
    grant_type: localStorage.getItem('refresh_token') || '',
  }

  const accessbody = {
    client_id: 'dev',
    client_secret: 'store',
    grant_type: 'password',
    username: 'it@na-kd.com',
    password: 'store',
  }

  const body = refresh ? refreshBody : accessbody

  const response = await fetch('/connect/token', {
    method: 'POST',
    body: new URLSearchParams(body),
    redirect: 'follow',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Connection: 'keep-alive',
    },
  })
  const data: TokenTypes = await response.json()
  localStorage.setItem('access_token', data.access_token)
  localStorage.setItem('refresh_token', data.refresh_token)

  return data.access_token
}

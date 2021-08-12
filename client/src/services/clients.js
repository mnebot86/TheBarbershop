import api from './apiConfig'

export const signUp = async (clientData) => {
  const res = await api.post(`/client`, { client: clientData } )
  const { token } = res.data
  if (token) {
    localStorage.setItem(`authToken`, token)
    api.defaults.headers.common.authorization = `Bearer ${ token }`
    return res.data.client
  }
}

export const login = async (clientData) => {
  const res = await api.post(`/clients/login`, {client: clientData})
  const { token } = res.data
  if (token) {
    localStorage.setItem(`authToken`, token)
    api.defaults.headers.common.authorization = `Bearer ${ token }`
    return res.data.client
  }
}

export const verify = async () => {
  const token = localStorage.getItem(`authToken`)
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${ token }`
    const res = await api.get(`/clients/verify`)
    return res.data
  }
}

export const logout = () => {
  localStorage.removeItem(`authToken`)
  api.defaults.headers.common.authorization = null
}
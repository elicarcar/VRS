import axios from 'axios'

const AUTH_TOKEN_KEY = 'token'

export function setAuthToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function clearAuthToken() {
  axios.defaults.headers.common['Authorization'] = ''
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn() {
  const authToken = getAuthToken()
  return !!authToken
}

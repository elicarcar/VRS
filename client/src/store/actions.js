import axios from 'axios'
import uuid from 'uuid'
import { base_URL } from '../utils/url.js'
import { setAuthToken, clearAuthToken } from '../utils/auth.js'
import store from '../store'
import router from '../router/index.js'
import people from '../data/people.js'

export default {
  loadUser: async ({ commit }) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    } else {
      return
    }

    try {
      const res = await axios.get(`${base_URL}/user`)

      commit('LOAD_USER', res.data)
      router.push('/').catch((err) => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
          err.name !== 'NavigationDuplicated' &&
          !err.message.includes(
            'Avoided redundant navigation to current location'
          )
        ) {
          // But print any other errors to the console
          logError(err)
        }
      })
    } catch (err) {
      commit('AUTH_ERROR')
      clearAuthToken()
      console.log(err)
    }
  },

  login: async ({ commit, dispatch }, string) => {
    try {
      const data = {
        string: string,
      }
      const res = await axios.post(`${base_URL}/auth`, data)

      commit('AUTH_SUCCESS')
      setAuthToken(res.data)
      dispatch('loadUser')

      const alert = {
        alert: 'You have successfully logged in',
        alertType: 'primary',
      }

      dispatch('alert', alert)
    } catch (err) {
      commit('AUTH_ERROR')
      clearAuthToken()
      const errorAlert = {
        alert: err.message,
        alertType: 'danger',
      }
      dispatch('alert', errorAlert)
    }
  },

  logout: async ({ commit }) => {
    try {
      commit('LOGOUT')
      clearAuthToken()
      router.push('/login')
    } catch (error) {
      console.error(error)
    }
  },

  getPeople: async ({ commit }) => {
    axios
      .get('https://my-json-server.typicode.com/elicarcar/mockAPI/people')
      .then((res) => {
        commit('GET_PEOPLE', res.data)
      })
      .catch((err) => console.log(err))
  },

  addVisitor: async ({ commit }, visitor) => {
    axios
      .post(`${base_URL}/visitor`, visitor)
      .then((res) => {
        commit('ADD_VISITORS', res.data)
        console.log(res)
      })
      .catch((err) => console.log(err))
  },

  getAllVisitors: async ({ commit }) => {
    axios
      .get(`${base_URL}/visitors`)
      .then((res) => {
        commit('GET_VISITORS', res.data)
        console.log(res.data)
      })
      .catch((error) => {
        commit('ERROR_VISITORS', error.message)
        console.log(error)
      })
  },

  updateVisitor: async ({ commit }, id) => {
    axios
      .post(`${base_URL}/visitor/visits/${id}`)
      .then((res) => {
        commit('UPDATE_CURRENT_VISITORS', res.data)
        console.log(res)
      })
      .catch((err) => console.log(err))
  },

  getVisits: async ({ commit }) => {
    try {
      const res = await axios.get(`${base_URL}/visits`)
      commit('GET_VISITS', res.data)
    } catch (error) {
      console.log(error)
    }
  },

  alert: ({ commit }, alertPayload, timeout = 3000) => {
    const id = uuid.v4()
    const { alert, alertType } = alertPayload
    const payload = {
      id,
      alert,
      alertType,
    }

    commit('ADD_ALERT', payload)

    setTimeout(() => commit('REMOVE_ALERT', payload.id), timeout)
  },
}

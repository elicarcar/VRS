import axios from 'axios'
import uuid from 'uuid'
import { base_URL } from '../utils/url.js'
import { setAuthToken } from '../utils/auth.js'
import store from '../store'
import router from '../router/index.js'
import people from '../data/people.js'

export default {
  loadUser: async ({ commit }) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
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
      console.log(err)
    }
  },

  login: async ({ commit }, string) => {
    try {
      const data = {
        string: string,
      }
      const res = await axios.post(`${base_URL}/auth`, data)

      setAuthToken(res.data)
      commit('AUTH_SUCCESS')

      store.dispatch('loadUser')
    } catch (err) {
      commit('AUTH_ERROR')
      console.log(err)
    }
  },

  getPeople: async ({ commit }) => {
    axios
      .get('https://my-json-server.typicode.com/elicarcar/mockAPI/people')
      .then((res) => {
        commit('GET_PEOPLE', res.data)
      })
      .catch((err) => console.log(err))

    console.log('fired')
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

  alert: ({ commit }, alert, alertType, timeout = 5000) => {
    const id = uuid.v4()
    const payload = {
      id,
      alert,
      alertType,
    }

    commit('ADD_ALERT', payload)

    setTimeout(() => commit('REMOVE_ALERT', payload.id), timeout)
  },
}

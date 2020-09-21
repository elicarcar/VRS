import axios from 'axios'
import uuid from 'uuid'
import { base_URL } from '../utils/url.js'
import { setAuthToken } from '../utils/auth.js'
import router from '../router/index.js'

export default {
  login: async ({ commit }, string) => {
    try {
      const data = {
        string: string,
      }
      const res = await axios.post(`${base_URL}/auth`, data)

      const {
        data: {
          access_token: { token },
        },
      } = res

      setAuthToken(token)
      commit('AUTH_SUCCESS', res.data.user)
      router.push('/')
    } catch (err) {
      commit('AUTH_ERROR')
      console.log(err)
    }
  },

  getPeople: async ({ commit }) => {
    axios
      .get('https://5f5786361a07d600167e6f3f.mockapi.io/api/v1/people')
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
      })
      .catch((error) => console.log(error))
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

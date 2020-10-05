import axios from 'axios'
import uuid from 'uuid'
import { base_URL } from '../utils/url.js'
import { setAuthToken, clearAuthToken } from '../utils/auth.js'
import store from '../store'
import router from '../router/index.js'

export default {
  loadUser: async ({ commit }) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      return;
    }

    try {
      const res = await axios.get(`${base_URL}/user`);

      commit("LOAD_USER", res.data);
      router.push("/").catch(err => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
          err.name !== "NavigationDuplicated" &&
          !err.message.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          // But print any other errors to the console
          logError(err);
        }
      });
    } catch (err) {
      commit('AUTH_ERROR')
      clearAuthToken()
    }
  },

  login: async ({ commit, dispatch }, data) => {
    try {
      const userInfo = {
        data: data.wc,
      }
      const res = await axios.post(`${base_URL}/auth`, userInfo)

      commit("AUTH_SUCCESS");
      setAuthToken(res.data);
      dispatch("loadUser");

      const alert = {
        alert: "You have successfully logged in",
        alertType: "primary"
      };

      dispatch("alert", alert);
    } catch (err) {
      commit("AUTH_ERROR");
      clearAuthToken();
      const errorAlert = {
        alert: err.message,
        alertType: "danger"
      };
      dispatch("alert", errorAlert);
    }
  },

  logout: async ({ commit, dispatch }) => {
    try {
      commit("LOGOUT");
      clearAuthToken();
      router.push("/login");
    } catch (error) {
      const alert = {
        alert: error.message,
        alertType: 'danger',
      }
      dispatch('alert', alert)
    }
  },

  getPeople: async ({ commit, dispatch }) => {
    axios
      .get("https://my-json-server.typicode.com/elicarcar/mockAPI/people")
      .then(res => {
        commit("GET_PEOPLE", res.data);
      })
      .catch((err) => {
        const alert = {
          alert: error.message,
          alertType: 'danger',
        }
        dispatch('alert', alert)
      })
  },

  addVisitor: async ({ commit, dispatch }, visitor) => {
    try {
      const res = await axios.post(`${base_URL}/visitor`, visitor)
      commit('ADD_VISITORS', res.data)
      if (!res.data.length) {
        dispatch('getAllVisitors')
      }
    } catch (error) {
      const alert = {
        alert: 'An error occurred while fetching visitors.',
        alertType: 'danger',
      }
      dispatch('alert', alert)
    }
  },

  getAllVisitors: async ({ commit }) => {
    axios
      .get(`${base_URL}/visitors`)
      .then((res) => {
        commit('GET_VISITORS', res.data)
      })
      .catch((error) => {
        commit('ERROR_VISITORS', error.message)
      })
      .catch(error => {
        commit("ERROR_VISITORS", error.message);
        console.log(error);
      });
  },

  updateVisitor: async ({ commit, dispatch }, id) => {
    axios
      .post(`${base_URL}/visitor/visits/${id}`)
      .then((res) => {
        commit('UPDATE_CURRENT_VISITORS', res.data)
        dispatch('getAllVisitors')
      })
      .catch((err) => {
        const alert = {
          alert: err.message,
          alertType: 'danger',
        }
        dispatch('alert', alert)
      })
  },

  getVisits: async ({ commit, dispatch }) => {
    try {
      const res = await axios.get(`${base_URL}/visits`);
      commit("GET_VISITS", res.data);
    } catch (error) {
      const alert = {
        alert: 'An error occurred while fetching visitors.',
        alertType: 'danger',
      }
      dispatch('alert', alert)
    }
  },

  alert: ({ commit }, alertPayload, timeout = 3000) => {
    const id = uuid.v4();
    const { alert, alertType } = alertPayload;
    const payload = {
      id,
      alert,
      alertType
    };

    commit("ADD_ALERT", payload);

    setTimeout(() => commit("REMOVE_ALERT", payload.id), timeout);
  }
};

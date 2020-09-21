export default {
  AUTH_SUCCESS: (state, user) => {
    const { id, email, full_name } = user
    state.auth.user = { id, email, full_name }
    state.auth.user.isAuthenticated = true
  },

  AUTH_ERROR: (state) => {
    localStorage.removeItem('token')
    state.auth.user = {
      id: null,
      email: '',
      full_name: '',
    }
    state.auth.user.isAuthenticated = false
  },

  GET_PEOPLE: (state, people) => {
    state.people = people
  },

  ADD_VISITORS: (state, visitor) => {
    state.visitors = [...state.visitors, visitor]
  },

  GET_VISITORS: (state, visitors) => {
    state.visitors = visitors
  },

  UPDATE_CURRENT_VISITORS: (state) => {
    state.visitors
  },

  GET_VISITS: (state, visits) => {
    state.visits = visits
  },

  ADD_ALERT: (state, alert) => {
    state.alerts = [...state.alerts, alert]
  },

  REMOVE_ALERT: (state, id) => {
    state.alerts = state.alerts.filter((alert) => alert.id !== id)
  },
}

export default {
  AUTH_SUCCESS: (state) => {
    state.auth.user.isAuthenticated = true
    state.auth.user.token = localStorage.getItem('token')
  },

  LOAD_USER: (state, user) => {
    const { id, email, full_name } = user
    state.auth.user.id = id
    state.auth.user.email = email
    state.auth.user.full_name = full_name
    state.auth.user.isAuthenticated = true
  },

  LOGOUT: (state) => {
    state.auth.user = {
      id: null,
      email: '',
      full_name: '',
      isAuthenticated: false,
    }
  },

  AUTH_ERROR: (state) => {
    state.auth.user = {
      id: null,
      email: '',
      full_name: '',
      isAuthenticated: false,
    }
  },

  GET_PEOPLE: (state, people) => {
    state.people = people
  },

  ADD_VISITORS: (state, visitor) => {
    state.visitors.data = [...state.visitors.data, visitor]
    state.visitors.isLoading = false
  },

  GET_VISITORS: (state, visitors) => {
    state.visitors.data = visitors
    state.visitors.isLoading = false
  },

  ERROR_VISITORS: (state, error) => {
    state.visitors.errors = error
  },

  UPDATE_CURRENT_VISITORS: (state) => {
    state.visitors
  },

  GET_VISITS: (state, visits) => {
    state.visits = visits
  },

  ADD_ALERT: (state, alert) => {
    state.alerts = [alert, ...state.alerts]
  },

  REMOVE_ALERT: (state, id) => {
    state.alerts = state.alerts.filter((alert) => alert.id !== id)
  },
}

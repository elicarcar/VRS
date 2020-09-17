export default {
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

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
    return state
  },
}

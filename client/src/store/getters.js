export default {
  getActiveVisitors: (state) => {
    return state.visitors.data.filter((v) => v.is_logged)
  },

  visitorsVisits: (state) => (visitor) => {
    return state.visits.filter((v) => v.v_id == visitor.id)
  },
}

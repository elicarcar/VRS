export default {
  activeVisitors: (state) => {
    return state.visitors.filter((v) => v.is_logged)
  },

  visitorsVisits: (state) => (visitor) => {
    return state.visits.filter((v) => v.v_id == visitor.id)
  },
}

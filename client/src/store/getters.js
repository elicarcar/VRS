export default {
  getActiveVisitors: (state) => {
    const localVisitors = state.visitors.data.filter((v) => {
      const v_ip = v.ip_address.split('/')
      return v_ip[0] === state.ip
    })
    return localVisitors.filter((v) => v.is_logged)
  },

  getVisitorsBasedOnLocation: (state) => {
    return state.visitors.data.filter((v) => {
      const v_ip = v.ip_address.split('/')
      return v_ip[0] === state.ip
    })
  },

  visitorsVisits: (state) => (visitor) => {
    return state.visits.filter((v) => v.v_id == visitor.id)
  },
}

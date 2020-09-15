export default {
  activeVisitors: (state) => {
    return state.visitors.filter((v) => v.is_logged)
  },
}

export default {
  auth: {
    user: {
      token: localStorage.getItem('authToken'),
      id: null,
      email: '',
      full_name: '',
      isAuthenticated: false,
    },
    isLoading: true,
  },
  visitor: null,
  people: [],
  visitors: [],
  visits: [],
  alerts: [],
}

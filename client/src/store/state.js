export default {
  ip: '',
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
  visitors: {
    isLoading: true,
    data: [],
    errors: {},
  },
  people: [],
  visits: [],
  alerts: [],
}

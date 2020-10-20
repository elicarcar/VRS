export const base_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://wirelab-vrs.herokuapp.com'
    : 'http://localhost:5000'

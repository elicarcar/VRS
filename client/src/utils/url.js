export const base_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://obscure-refuge-49546.herokuapp.com/'
    : 'http://localhost:5000'

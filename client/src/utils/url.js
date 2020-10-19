export const base_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://thawing-beach-80585.herokuapp.com/'
    : 'http://localhost:5000'

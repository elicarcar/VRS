<template>
  <div id="app">
    <Nav />
    <Alert />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page {
  position: fixed;
  width: 100%;
}

.fade-enter,
.fade-leave {
  opacity: 0;
  transform: translate(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>

<script>
import Nav from './components/Nav'
import Alert from './components/Alert'
import { getAuthToken } from './utils/auth.js'

export default {
  name: 'Home',
  components: {
    Nav,
    Alert,
  },
  created() {
    if (localStorage.token) {
      getAuthToken(localStorage.token)
    }
    this.$store.dispatch('loadUser')
    this.$store.dispatch('fetchIP')
  },
}
</script>

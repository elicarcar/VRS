<template>
  <div id="app">
    <Nav />
    <transition name="router-anim">
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
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.page {
  position: fixed;
  width: 100%;
}

.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.5s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.5s;
}

@keyframes coming {
  from {
    transform: translateX(-50px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
  }
}
</style>

<script>
import Nav from './components/Nav'
import { getAuthToken } from './utils/auth.js'
export default {
  name: 'Home',
  components: {
    Nav,
  },
  created() {
    if (localStorage.token) {
      getAuthToken(localStorage.token)
    }
    this.$store.dispatch('loadUser')
  },
}
</script>

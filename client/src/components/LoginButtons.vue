<template>
  <div>
    <b-button-group>
      <b-button v-if="!auth.user.isAuthenticated" variant="outline-default">
        <router-link to="/login">
          <b-icon icon="person-fill"></b-icon> Login
        </router-link>
      </b-button>
      <b-button v-else variant="outline-default">
        <b-icon icon="door-open-fill"></b-icon> Logout
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LoginButtons',
  computed: {
    ...mapState(['auth']),
  },
}
</script>

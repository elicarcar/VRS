<template>
  <div class="panel">
    <div class="form-container">
      <h2>Please login to your account</h2>

      <form>
        <div class="form-group d-flex justify-content-center">
          <button
            class="btn btn-primary"
            id="g-signin2"
            @click.prevent="submit"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginForm',

  methods: {
    ...mapActions(['alert', 'login']),
    submit() {
      this.$gAuth
        .signIn()
        .then((user) => {
          this.login(user)
          this.isSignIn = this.$gAuth.isAuthorized
        })
        .catch((error) => {
          const alert = {
            alert: error.error,
            alertType: 'danger',
          }
          this.alert(alert)
        })
    },
  },
}
</script>

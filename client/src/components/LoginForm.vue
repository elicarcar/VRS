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

    async submit() {
      try {
        const googleUser = await this.$gAuth.signIn()
        const profile = googleUser.getBasicProfile()
        const isNotGmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@wirelab([\.])nl/g
        if (isNotGmail.test(profile.Wt)) {
          this.login(googleUser)
          this.isSignIn = this.$gAuth.isAuthorized
        } else {
          const alert = {
            alert: '401 - Not a valid user.',
            alertType: 'danger',
          }
          this.alert(alert)
        }
      } catch (error) {
        console.log(error)
        const alert = {
          alert: error.error,
          alertType: 'danger',
        }
        this.alert(alert)
      }
    },
  },
}
</script>

<template>
  <div class="btn-group">
    <b-button-group>
      <b-button v-if="!auth.user.isAuthenticated" variant="outline-default">
        <router-link to="/login">
          <b-icon icon="person-fill"></b-icon> Login
        </router-link>
      </b-button>
      <b-button v-else variant="outline-default" @click="showModal = true">
        <b-icon icon="door-open-fill"></b-icon> Logout
      </b-button>
    </b-button-group>
    <transition name="fade-modal" appear>
      <div class="modal-overlay" v-if="showModal">
        <transition name="slide" appear>
          <div class="modal-box">
            <h3>Are you sure you want to logout?</h3>
            <div class="buttons">
              <b-button variant="secondary" @click="showModal = false">
                Cancel
              </b-button>
              <b-button variant="danger" @click="Logout()">
                Logout
              </b-button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-modal-enter,
.fade-modal-leave-to {
  opacity: 0;
}
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.5s;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%);
}
</style>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LoginButtons',
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    ...mapState(['auth']),
  },

  methods: {
    ...mapActions(['logout', 'alert']),
    Logout: async function() {
      try {
        this.$gAuth.signOut().then(() => {
          this.$store.dispatch('logout')
          this.showModal = false
        })
      } catch (error) {
        const alert = {
          alert: error.message,
          alertType: 'danger',
        }
        this.alert(alert)
      }
    },
  },
}
</script>

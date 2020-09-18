<template>
  <div class="panel">
    <div class="form-container">
      <h2>Please login to your account</h2>

      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="formData.email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="formData.password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="submit">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LoginForm',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    }
  },

  computed: {
    ...mapState(['alerts']),
  },

  methods: {
    ...mapActions(['alert', 'login']),
    submit: async function() {
      try {
        const token = Buffer.from(
          `${this.formData.email}:${this.formData.password}`,
          'utf8'
        ).toString('base64')

        this.login(token)
      } catch (error) {
        console.log(error)
        this.alert(error.message, 'warning')
      }
    },
  },
}
</script>

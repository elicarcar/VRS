<template>
  <div class="page">
    <div class="d-flex justify-content-center align-items-center">
      <h1>Visitors</h1>
    </div>
    <AllVisitors :visitors="visitors" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AllVisitors from '../components/AllVisitors'

export default {
  name: 'Home',

  components: {
    AllVisitors,
  },

  computed: {
    ...mapState(['visitors']),
  },

  methods: {
    ...mapActions(['getAllVisitors']),
  },

  mounted() {
    this.$store.dispatch('getAllVisitors')
  },
}
</script>

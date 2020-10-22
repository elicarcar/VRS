<template>
  <div class="page">
    <div class="d-flex justify-content-center align-items-center">
      <h1>Visitors</h1>
    </div>
    <AllVisitors :visitors="localVisitors" :allVisitors="visitors" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import AllVisitors from '../components/AllVisitors'

export default {
  name: 'Home',

  components: {
    AllVisitors,
  },

  computed: {
    ...mapState(['visitors']),
    localVisitors() {
      return this.$store.getters.getVisitorsBasedOnLocation
    },
  },

  methods: {
    ...mapActions(['getAllVisitors']),
  },

  mounted() {
    this.$store.dispatch('getAllVisitors')
  },
}
</script>

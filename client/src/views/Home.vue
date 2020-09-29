<template>
  <div class="page">
    <div class="d-flex justify-content-center align-items-center">
      <h1>Online Visitors</h1>
    </div>
    <div v-if="visitors.isLoading">
      <Spinner />
    </div>
    <div v-else>
      <CurrentVisitors
        :visitors="activeVisitors"
        :changeStatus="changeStatus"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import CurrentVisitors from '../components/CurrentVisitors'
import Spinner from '../components/Spinner'

export default {
  name: 'Home',

  data() {
    return {
      currentlyActive: null,
    }
  },

  components: {
    CurrentVisitors,
    Spinner,
  },

  computed: {
    ...mapState(['visitors']),
    ...mapGetters(['getActiveVisitors']),
    activeVisitors: {
      get() {
        return this.getActiveVisitors
      },
    },
  },

  methods: {
    changeStatus: async function(visitor) {
      try {
        console.log(visitor)
        this.$store.dispatch('updateVisitor', visitor)
      } catch (error) {
        console.log(error)
      }
    },
  },

  created() {
    this.$store.dispatch('getAllVisitors')
  },

  mounted() {
    console.log('store visitors', this.visitors)
  },
}
</script>

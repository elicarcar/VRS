<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <b-form-checkbox switch v-model="showOnline"></b-form-checkbox>
      <h1>{{ showOnline ? 'Online Visitors' : 'Visitors' }}</h1>
    </div>

    <AllVisitors v-if="!showOnline" :visitors="visitors" />

    <CurrentVisitors
      v-if="showOnline"
      :visitors="activeVisitors"
      :changeStatus="changeStatus"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import AllVisitors from '../components/AllVisitors'
import CurrentVisitors from '../components/CurrentVisitors'

export default {
  name: 'Visitors',

  data() {
    return {
      showOnline: false,
      currentlyActive: null,
    }
  },

  components: {
    AllVisitors,
    CurrentVisitors,
  },

  computed: {
    ...mapState(['visitors']),
    ...mapGetters(['activeVisitors']),
  },

  watch: {
    activeVisitors: function reload() {
      this.$store.dispatch('getAllVisitors')
    },
  },

  methods: {
    ...mapActions(['getAllVisitors', 'updateVisitor']),

    changeStatus: async function(visitor) {
      try {
        console.log(visitor)
        this.updateVisitor(visitor)
      } catch (error) {
        console.log(error)
      }
    },
  },

  mounted() {
    this.$store.dispatch('getAllVisitors')
  },
}
</script>

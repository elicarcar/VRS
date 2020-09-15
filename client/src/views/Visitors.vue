<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <b-form-checkbox switch v-model="showOnline"></b-form-checkbox>
      <h1>{{ showOnline ? 'Online Visitors' : 'Visitors' }}</h1>
    </div>

    <AllVisitors v-if="!showOnline" :visitors="visitors" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import AllVisitors from '../components/AllVisitors'
export default {
  name: 'Visitors',

  data() {
    return {
      showOnline: false,
    }
  },

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

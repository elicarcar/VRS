<template>
  <VisitorDetails :visitor="visitor" :visits="visitorsVisits(visitor)" />
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import VisitorDetails from '@/components/VisitorDetails'

export default {
  name: 'Visitor',
  data() {
    return {
      visitor: {},
    }
  },

  components: {
    VisitorDetails,
  },

  computed: {
    ...mapState(['visitors', 'visits']),
    ...mapGetters(['visitorsVisits']),
  },

  methods: {
    ...mapActions(['getVisits']),
  },

  mounted() {
    this.$store.dispatch('getVisits')

    const visitant = this.visitors.data.find(
      (v) => v.id === this.$route.params.id
    )

    this.visitor = visitant
  },
}
</script>

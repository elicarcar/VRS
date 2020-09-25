<template>
  <div>
    <div class="alert-block">
      <b-alert
        show
        data-name="alert-box"
        v-for="alert in alerts"
        :variant="alert.alertType"
        :class="alerts.length ? 'fadeIn fadeOut' : ''"
        :key="alert.id"
      >
        {{ alert.alert }}
      </b-alert>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Alert',

  computed: {
    ...mapState(['alerts']),
  },
}
</script>

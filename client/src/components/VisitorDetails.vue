<template>
  <div>
    <div v-if="visitor.current_appointment">
      <b-button v-b-toggle.collapse-1 variant="default"
        >Current Appointment</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text" visible>
            <strong>Appointment with:</strong>
            {{ visitor.current_appointment.person.name }} <br />

            <strong>Starting Time:</strong>
            <!-- {{ visitor.current_appointment.starting_time | date }} -->
          </p>
        </b-card>
      </b-collapse>
    </div>

    <div v-if="visits.length">
      <b-button v-b-toggle.collapse-1 variant="default">Appointments</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card v-for="visit in visits" :key="visit.id">
          <table class="card-text visitor-table">
            <thead>
              <tr>
                <th>Visitor</th>
                <th>Email</th>
                <th>Appointment</th>
                <th>Started</th>
                <th>Ended</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Visitor</th>
                <th>Email</th>
                <th>Appointment</th>
                <th>Started</th>
                <th>Ended</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>{{ visitor.first_name }}</td>
                <td>{{ visitor.email }}</td>
                <td>{{ visit.person.person.name }}</td>
                <td>{{ visit.start_time }}</td>
                <td>{{ visit.end_time }}</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-collapse>
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'VisitorDetails',

  props: {
    visitor: Object,
    visits: Array,
  },

  //   filters: {
  //     date: function(date) {
  //       return DateTime.DATE_SHORT(date)
  //     },
  //   },
}
</script>

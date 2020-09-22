<template>
  <div>
    <div v-if="visitor.current_appointment">
      <b-button v-b-toggle.collapse-1 variant="default" class="text-shadow-30"
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

    <div v-show="visits.length">
      <b-button v-b-toggle.collapse-1 variant="default" class="text-shadow-30"
        >Appointments</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
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
            <tbody v-for="visit in visits" :key="visit.id">
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
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { mapActions, mapState } from 'vuex'
import Spinner from './Spinner'

export default {
  name: 'VisitorDetails',
  components: {
    Spinner,
  },
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

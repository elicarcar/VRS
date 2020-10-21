<template>
  <div>
    <div
      data-name="current-appointment"
      v-if="visitor !== null && visitor.current_appointment !== null"
    >
      <b-button v-b-toggle.collapse-1 variant="default" class="text-shadow-30"
        >Current Appointment</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text" visible>
            <strong>Appointment with:</strong>
            {{ visitor.current_appointment.person.full_name }} <br />

            <strong>Starting Time:</strong>
            {{ visitor.start_time | date }}
          </p>
        </b-card>
      </b-collapse>
    </div>

    <div data-name="visits" v-show="visits && visits.length">
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
                <td>{{ visit.person.person.full_name }}</td>
                <td>{{ visit.start_time | date }}</td>
                <td>{{ visit.end_time | date }}</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { utcToZonedTime, format } from 'date-fns-tz'

export default {
  name: 'VisitorDetails',

  props: {
    visitor: Object,
    visits: Array,
  },

  filters: {
    date: function(date) {
      const timeZone = 'Europe/Amsterdam'
      const zonedDate = utcToZonedTime(date, timeZone)

      const datePattern = 'd/M/yyyy'
      const timePattern = 'HH:mm a'
      const justDate = format(zonedDate, datePattern, {
        timeZone: 'Europe/Amsterdam',
      })
      const time = format(zonedDate, timePattern, {
        timeZone: 'Europe/Amsterdam',
      })
      return `${justDate} - ${time}`
    },
  },
}
</script>

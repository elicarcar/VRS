<template>
  <div>
    <div>
      <div class="alert-block">
        <b-alert
          show
          v-for="alert in alerts"
          variant="danger"
          :class="alerts.length ? 'fadeIn fadeOut' : ''"
          :key="alert.id"
        >
          {{ alert.alert }}
        </b-alert>
      </div>
    </div>
    <div class="m-5 pb-5">
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="visitor.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="First Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="visitor.first_name"
            required
            placeholder="Enter first name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="visitor.last_name"
            required
            placeholder="Enter last name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Company:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="visitor.company_name"
            required
            placeholder="Enter company name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Appointment With:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="visitor.current_appointment.person"
            :options="people"
            value-field="id"
            text-field="name"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { uuid } from 'vue-uuid'
export default {
  name: 'VisitingForm',
  data() {
    return {
      visitor: {
        id: uuid.v4(),
        email: '',
        first_name: '',
        last_name: '',
        company_name: '',
        current_appointment: {
          id: uuid.v4(),
          person: null,
        },
      },
    }
  },
  computed: {
    ...mapState(['people', 'alerts']),
  },
  methods: {
    ...mapActions(['getPeople', 'addVisitor', 'alert']),
    async onSubmit() {
      if (
        this.visitor.first_name.length < 3 ||
        this.visitor.last_name.length < 3
      ) {
        const errorMsg = 'Your name should be more than 3 characters.'
        this.alert(errorMsg, 'danger')
        return
      }

      try {
        const personObj = this.people.find(
          (person) => person.id === this.visitor.current_appointment.person
        )
        var now = Date.now()
        this.visitor.current_appointment.person = personObj
        this.addVisitor(this.visitor)
        this.$router.push({ name: 'Visitors' })
      } catch (error) {
        console.log(error)
        this.alert(error, 'danger')
      } finally {
        this.visitor = {
          id: uuid.v4(),
          email: '',
          first_name: '',
          last_name: '',
          company_name: '',
          current_appointment: {
            id: uuid.v4(),
            person: null,
          },
        }
      }
    },
  },
  mounted() {
    this.$store.dispatch('getPeople')
  },
}
</script>
x

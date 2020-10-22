<template>
  <div>
    <table
      class="visitor-table"
      v-show="!allVisitors.isLoading && visitors.length"
    >
      <thead>
        <tr>
          <th></th>
          <th>Visitor</th>
          <th>Email</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th></th>
          <th>Visitor</th>
          <th>Email</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="visitor in visitors" :key="visitor.id">
          <td class="status">
            <span
              :class="[visitor.is_logged ? 'logged-in' : 'logged-out']"
            ></span>
          </td>
          <td>
            <router-link :to="`/visitor/${visitor.id}`"
              >{{ visitor.first_name + ' ' + visitor.last_name }}
            </router-link>
          </td>
          <td>{{ visitor.email }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="!visitors.length && !allVisitors.isLoading">
      No visitors yet.
    </p>
    <div v-if="allVisitors.isLoading">
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'

export default {
  name: 'AllVisitors',
  components: {
    Spinner,
  },
  props: {
    visitors: Array,
    allVisitors: Object,
  },
}
</script>

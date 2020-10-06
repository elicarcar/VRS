<template>
  <div>
    <table class="visitor-table" v-show="visitors.length > 0">
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
          <td>{{ visitor.first_name + visitor.last_name }}</td>
          <td>{{ visitor.email }}</td>
          <td>
            <button class="btn" @click="changeStatus(visitor.id)">
              {{ visitor.is_logged ? 'End' : 'Start' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="!visitors.length">
      There are no visitors at the office right now.
    </p>
  </div>
</template>

<script>
export default {
  name: 'CurrentVisitors',

  props: {
    visitors: Array,
    changeStatus: Function,
  },
}
</script>

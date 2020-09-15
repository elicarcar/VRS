<template>
  <table class="visitor-table" v-show="visitors.length">
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
            >{{ visitor.first_name + visitor.last_name }}
          </router-link>
        </td>
        <td>{{ visitor.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'AllVisitors',

  props: {
    visitors: Array,
  },
}
</script>

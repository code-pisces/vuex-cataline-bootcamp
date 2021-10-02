<template>
  <ul>
    <li v-for="todo in $allTodos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    $allTodos() {
      return this.$store.getters.$allTodos
    }
  },
  created() {
    // dispara o evento fetchTodos
    this.$store.dispatch('fetchTodos')
  },
  methods: {
    deleteTodo(id) {
      // dispara o evento fetchTodos passando um parametro acessável para o vuex
      this.$store.dispatch('fetchTodos', id)
    }
  }
}
</script>

import { createStore } from 'vuex'

export default createStore({
  state: {
    // cria um estado
    todos: []
  },
  mutations: {
    // cria a mutação para alterar o valor do estado
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    // cria uma ação que pelo commit envia o valor para o mutation
    fetchTodos(context) {
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]

      context.commit('SET_TODOS', todos)
    }
  },
  getters: {
    // captura o dado tratado ou não
    $allTodos(state) {
      return state.todos
    },
    $doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    }
  }
})

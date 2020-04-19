import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos') || '[]')
  },
  mutations: {
    setTodo (state, todo) {
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo (state, id) {
      const todoIndex = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(todoIndex, 1)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    updateTodo (state, updatedTodo) {
      const updateble = state.todos.findIndex(todo => todo.id === updatedTodo.id)
      state.todos.splice(updateble, 1, updatedTodo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
    createTodo ({ commit }, todo) {
      commit('setTodo', todo)
    },
    deleteTodo ({ commit }, id) {
      commit('deleteTodo', id)
    },
    updateTodo ({ commit }, updatedTodo) {
      commit('updateTodo', updatedTodo)
    }
  },
  getters: {
    todos: state => state.todos,
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    },
    getTodoTasksById: state => (todoID, taskID) => {
      return state.todos.find(todo => todo.id === todoID).tasks.find(task => task.id === taskID).value
    }
  },
  modules: {}
})

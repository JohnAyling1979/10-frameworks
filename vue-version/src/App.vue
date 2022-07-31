<script>
  import TodoList from './components/TodoList.vue';
  import TodoForm from './components/TodoForm.vue';

  const baseApiUrl = 'http://localhost:3000';

  export default {
    components: {
      TodoList,
      TodoForm,
    },
    data() {
      return {
        loading: true,
        error: null,
        todos: [],
      }
    },
    created() {
      this.fetchTodos();
    },
    methods: {
      fetchTodos() {
        const self = this;

        fetch(`${baseApiUrl}/todos`)
          .then(function (response) {
            return response.json();
          })
          .then(function (fetchedTodos) {
            self.todos = fetchedTodos;

            self.loading = false;
          })
          .catch(function (error) {
            self.error = error.message;
          });
      },
      addTodo(todo) {
        const self = this;

        fetch(`${baseApiUrl}/todos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({todo})
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (todos) {
            self.todos = todos;
          })
          .catch(function (error) {
            self.error = error.message;
          });
      },
      deleteTodo(todoId) {
        const self = this;

        fetch(`${baseApiUrl}/todos/${todoId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(function (response) {
          return response.json();
        })
        .then(function (todos) {
          self.todos = todos;
        })
        .catch(function (error) {
          self.error = error.message;
        });
      }
    }
  }
</script>

<template>
  <div>
    <h3>Todos</h3>
    <div v-if="loading">Loading...</div>
    <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
    <TodoForm :postTodo="addTodo"/>
  </div>
</template>

<style scoped>
</style>

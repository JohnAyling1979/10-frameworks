<script>
  export default {
    props: ['postTodo'],
    data() {
      return {
        todo: '',
      }
    },
    methods: {
      addTodo() {
        this.postTodo(this.todo);

        this.todo = '';
      }
    }
  }
</script>

<template>
  <form v-on:submit.prevent="addTodo">
    <input v-model="todo" required />
    <input type="submit" value="Add" />
  </form>
</template>

<style scoped>
</style>

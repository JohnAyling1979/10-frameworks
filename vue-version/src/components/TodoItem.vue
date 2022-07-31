<script>
  export default {
    props: ['id', 'todo', 'deleteTodo'],
    methods: {
      removeTodo() {
        this.deleteTodo(this.id);
      }
    }
  }
</script>

<template>
  <li @click="removeTodo">
		{{todo}}
  </li>
</template>

<style scoped>
</style>

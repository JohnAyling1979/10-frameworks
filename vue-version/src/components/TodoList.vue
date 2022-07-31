<script>
	import TodoItem from './TodoItem.vue';

	export default {
		props: ['todos', 'deleteTodo'],
		components: {
			TodoItem
		}
  }
</script>

<template>
  <ul>
		<TodoItem v-for="(todo, index) in todos" :id="index" :todo="todo" :deleteTodo="deleteTodo" />
  </ul>
</template>

<style scoped>
</style>

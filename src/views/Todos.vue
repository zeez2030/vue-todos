<template>
  <todo-list list-name="My to-dos" page="todo" />
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "Todos",
  components: {
    TodoList
  }
};
</script>

<style lang="scss"></style>

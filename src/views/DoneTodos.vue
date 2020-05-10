<template>
  <todo-list list-name="New to-dos" />
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "DoneTodos",
  components: {
    TodoList
  }
};
</script>

<style lang="scss"></style>

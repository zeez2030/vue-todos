<template>
  <todo-list list-name="Done to-dos" page="done" />
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

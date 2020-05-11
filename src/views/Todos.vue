<template>
  <div class="todo-list-container">
    <todo-list list-name="My to-dos" page="todo" />
  </div>
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

<style lang="scss">
.todo-list-container {
  text-align: center;
  h1 {
  }
  ul {
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
}
</style>

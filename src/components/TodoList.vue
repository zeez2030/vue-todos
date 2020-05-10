<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>

    <div class="row mb-3" v-if="page==='todo'">
      <create-todo @on-new-todo="addTodo($event)" page="todo" />
    </div>

    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6" v-if="page==='todo'">
        <ul class="list-group">
          <todo
            page="todo"
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>

      <div class="col-12 col-sm-10 col-lg-6" v-else>
        <ul class="list-group">
          <todo
            page="done"
            v-for="(todo, index) in doneTodos"
            :key="index"
            :description="todo.description"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  props: {
    listName: String,
    page: String
  },
  data() {
    return {
      todos: [
        // { description: "Do the dishes", completed: false },
        // { description: "Take out the trash", completed: false },
        // { description: "Finish doing laundry", completed: false }
      ],
      doneTodos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      this.deleteTodo(todo);
      this.doneTodos.push({ description: todo.description });
      localStorage.setItem("doneTodos", JSON.stringify(this.doneTodos));
    },

    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    }
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos") || []);
    this.doneTodos = JSON.parse(localStorage.getItem("doneTodos") || []);
    // localStorage.removeItem("doneTodos");
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>

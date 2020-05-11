<template>
  <li class="d-flex align-items-center list-group-item">
    <template v-if="page === 'todo'">
      <input type="checkbox" v-on:change="onCheckBox" id="checkbox" />
    </template>
    <template v-if="page === 'todo'">
      <button
        class="btn border-0 flex-grow-1 text-left shadow-none"
        :class="{ completed }"
        v-if="!isEditing"
      >
        <span>{{ description }}</span>
      </button>
      <form v-else class="flex-grow-1" @submit.prevent="finishEditing()">
        <input
          type="text"
          class="form-control"
          v-model="newTodoDescription"
          @blur="finishEditing()"
          ref="newTodo"
        />
      </form>
      <button
        @click="startEditing()"
        class="btn btn-outline-primary border-0 ml-2"
        id="startedit"
      >
        <span class="fa fa-edit"></span>
      </button>
      <button
        @click="deleteTask"
        class="btn btn-outline-danger border-0"
        id="delete"
      >
        <span class="fa fa-trash"></span>
      </button>
    </template>
    <template v-else>
      <button class="btn border-0 flex-grow-1 text-left shadow-none">
        <span>{{ description }}</span>
      </button>
    </template>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: ""
    };
  },
  props: {
    description: String,
    completed: Boolean,
    page: String
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    },
    onCheckBox(e) {
      console.log(e);
      e.target.checked = false;
      this.$emit("on-toggle");
    },
    deleteTask() {
      this.$emit("on-delete");
    }
  }
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>

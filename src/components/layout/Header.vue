<template>
  <header class="header">
    <h1>TODO</h1>
    <div id="nav">
      <router-link to="/" id="home">Home</router-link>
      <router-link to="/todos" id="todos">Todos</router-link>
      <router-link to="/done" id="done">Done Todos</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  methods: {
    setData(name) {
      this.route = name;
    }
  }
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  text-decoration: none;
  margin-right: 2em;
  transition: all 0.3s;
}
.header a:hover {
  color: rgb(161, 40, 40);
}
.active {
  color: rgb(161, 40, 40) !important;
  text-decoration: underline !important;
}
</style>

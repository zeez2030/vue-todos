<template>
  <header class="header">
    <h1>TODO</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/todos">Todos</router-link>
      <router-link to="/done">Done Todos</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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
  padding-right: 5px;
  text-decoration: none;
  margin-right: 2em;
  transition: all 0.3s;
}
.header a:hover {
  color: rgb(161, 40, 40);
}
</style>

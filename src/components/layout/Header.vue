<template>
  <header class="header">
    <h1>TODO</h1>
    <div id="nav">
      <router-link to="/" id="home" v-on:click="setData('Home')"
        >Home</router-link
      >
      <router-link to="/todos" id="todos" v-on:click="setData('Todos')"
        >Todos</router-link
      >
      <router-link to="/done" id="done" v-on:click="setData('Done')"
        >Done Todos</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    route: "";
  },
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
  padding-right: 5px;
  text-decoration: none;
  margin-right: 2em;
  transition: all 0.3s;
}
.header a:hover {
  color: rgb(161, 40, 40);
}
</style>

<template>
  <nav-header> </nav-header>
  <!-- <home> </home> -->
  <router-view> </router-view>
</template>

<script>
// import Home from "./pages/home.vue"
import Nav from "./components/Nav.vue"
export default {
  name: "App",
  components: {
    // Home,
    NavHeader: Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

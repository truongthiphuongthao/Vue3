<template>
  <div v-click-outside="onClickOutside"> hello </div>
  <p v-show="showText"> I am robot </p>
</template>

<script>
import VClickOutSide from "click-outside-vue3"

export default {
  name: "App",
  data(){
    return {
      showText: false
    }
  },
  directives: {
    clickOutside: VClickOutSide.directives
  },
  methods: {
    onClickOutside(event){
      console.log("clicked out side. Event: ", event)
      this.showText = !this.showText
    }
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

<template>
  <h1> hello </h1>
  <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
</template>

<script>
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default {
  name: "App",
  components: {
    Picker
  },
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

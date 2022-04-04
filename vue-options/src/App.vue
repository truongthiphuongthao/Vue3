<template>
  <button @click="increment"> {{ count }} </button>
  <p> {{ publishedBooksMessage }} </p>
  <div :class="{ active: isActive, 'text-danger': hasError }"> </div>
  <div :class="classObject"> hello</div>
  <li v-for="(item, index) in items" :key="index">
    {{ item.message }}
  </li>
  <li v-for="(value, key, index) in myObject" :key ="index">
    {{ index }}. {{ key }}: {{ value }}
  </li>
  <button @click="greet"> Greet </button>
  <button @click="warn('Form cannot be submitted yet.', $event)"> Submit </button>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox"> {{ checked }} </label>
  <div>
    <h2> Checkbox many values </h2>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <div> Result checked names: {{ checkedNames }}</div>
  </div>
  <div> 
    <h2> Radio </h2>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <p> {{ picked }} </p>
  </div>
  <div> 
    <h2> Selected </h2>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
  <div>
    <h2> Create array with many options </h2>
    <select v-model="createSelected"> 
      <option v-for="option in options" :key="option.value"> 
        {{ option.value }}
      </option>
    </select>
    <p> {{ createSelected }}</p>
  </div>
</template>

<script>
import { nextTick } from 'vue'

export default {
  name: "App",
  data(){
    return {
      count: 0,
      obj : {
        nested: { count : 0},
        arr: ['hello', 'hi']
      },
      author: {
        name: "John Doe",
        books: [
          'Vue 2 - Advance guide',
          'Vue 3 - Basic guide',
          'Vue 4 - The mystery'
        ]
      },
      firstName: "John",
      lastName: 'Doe',
      isActive: true,
      hasError: true,
      classObject: {
        active: true,
        'text-danger': false,
      },
      items: [
        { message: 'Foo' },
        {message: 'Bar' }
      ],
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: '2016-04-10'
      },
      name: 'Vuejs',
      checked: false,
      checkedNames: [],
      picked: false,
      selected: "",
      createSelected : "A",
      options: [
        { text: 'one', value: 'A'},
        { text: 'two', value: 'B'},
        { text: 'three', value: 'C'}
      ]
    }
  },
  mounted(){
    this.increment()
    this.mutateDeeply()
  },
  computed: {
    publishedBooksMessage(){
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  },
  methods: {
    increment(){
      this.count++
      console.log("before use nexttick: ", this.count)
      nextTick(() => {
        console.log("after use nexttick: ", this.count)
      })
    },
    mutateDeeply(){
      this.obj.nested.count ++
      this.obj.arr.push("aloha")
      console.log(this.obj)
    },
    greet(event){
      console.log(event)
      alert(`Hello ${this.name}`)
      if(event){
        console.log(event.target.name)
      }
    },
    warn(message, event){
      console.log("message: ", message)
      console.log("event: ", event)
      if(event){
        event.preventDefault()
      }
      alert(message)
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

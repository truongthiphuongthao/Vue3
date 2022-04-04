<template>
<div class="container">
  <div class="row border border-dark">
    <textarea id="w3review" name="w3review" rows="4" cols="50" v-model="textMessage">
    </textarea>
  </div>
  <div class="row border border-dark">
     <emoji :data="emojiIndex" emoji=":grinning:" :size="32" @click.self="showPicker = !showPicker" set="twitter"/>
     <Picker :data="emojiIndex" set="google" @select="showEmoji" v-if="showPicker" />
  </div>
  <div class="row border border-dark">
    <div>
      Result message: {{ textMessage }}
    </div>
  </div>
</div>
</template>

<script>
import data from "emoji-mart-vue-fast/data/all.json";
// Note: component needs to be imported from /src subfolder:
import { Picker, EmojiIndex, Emoji} from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";
let emojiIndex = new EmojiIndex(data);

export default {
  name: "App",
  components: {
    Picker,
    Emoji
  },
  data() {
    return {
      emojiIndex: emojiIndex,
      emojisOutput: "",
      textMessage: "",
      showPicker: false
    };
  },
  methods: {
    emojiFallback(emoji){
      	return `:${emoji.short_names[0]}:`
    },
    showEmoji(emoji) {
      this.emojisOutput = this.emojisOutput + emoji.native;
      this.textMessage += emoji.native
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

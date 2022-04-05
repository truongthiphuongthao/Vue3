import { createApp } from "vue";
import App from "./App.vue";
import VClickOutSide from "click-outside-vue3"
const app = createApp(App)
app.use(VClickOutSide)
app.mount("#app")

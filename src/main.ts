import "./lib/pineapple.scss";
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import './assets/font_3946395_8ixycqv0yjl.js'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Markdown", Markdown)

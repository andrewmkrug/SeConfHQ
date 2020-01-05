import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'
// import '../src/style.scss'
import "@/assets/code-highlight.css"

export default function (Vue, {
  head
}) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  })

  Vue.use(Buefy, {
    defaultIconPack: 'fas' // Font Awesome Solid
  })
}
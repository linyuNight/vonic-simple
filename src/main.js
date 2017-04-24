import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import Button from './components/Button.vue'

// Routes
const routes = [
  // { path: '/', component: Index },
  // { path: '/about', component: About }
  { path: '/', component: Button }
]

Vue.use(Vonic.app, {
  routes: routes
})

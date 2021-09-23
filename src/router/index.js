import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewFeedback from '../views/NewFeedback.vue'
import EditFeedback from '../views/EditFeedback.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newfeedback',
    name: 'NewFeedback',
    component: NewFeedback
  },
  {
    path: '/editfeedback',
    name: 'EditFeedback',
    component: EditFeedback
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

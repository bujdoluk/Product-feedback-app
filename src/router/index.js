import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateFeedback from '../views/CreateFeedback.vue'
import EditFeedback from '../views/EditFeedback.vue'
import Roadmap from '../views/Roadmap.vue'
import FeedbackDetail from '../views/FeedbackDetail.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/create',
    name: 'CreateFeedback',
    component: CreateFeedback
  },
  {
    path: '/edit',
    name: 'EditFeedback',
    component: EditFeedback
  },
  {
    path: '/roadmap',
    name: 'Roadmap',
    component: Roadmap
  },
  {
    path: '/feedbackdetail',
    name: 'FeedbackDetail',
    component: FeedbackDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router

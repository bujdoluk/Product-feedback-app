import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewFeedback from '../views/NewFeedback.vue'
import EditFeedback from '../views/EditFeedback.vue'
import Roadmap from '../views/Roadmap.vue'
import FeedbackDetail from '../views/FeedbackDetail.vue'

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
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateFeedback from '../views/CreateFeedback.vue'
import EditFeedback from '../views/EditFeedback.vue'
import Roadmap from '../views/Roadmap.vue'
import FeedbackDetail from '../views/FeedbackDetail.vue'
import Welcome from '../views/Welcome.vue'

import { projectAuth } from "../firebase/config"

// auth guard

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log("Current user in auth guard: ", user)
  if (!user) {
    next({ name: "Welcome" })
  } else {
    next()
  }

}

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
    component: CreateFeedback,
    beforeEnter: requireAuth
  },
  {
    path: '/edit',
    name: 'EditFeedback',
    component: EditFeedback,
    beforeEnter: requireAuth
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

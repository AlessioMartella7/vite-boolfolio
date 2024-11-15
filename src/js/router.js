import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppProjects from '../pages/AppProjects.vue'
import AppTechnologies from '../pages/AppTechnologies.vue'

const routes = [
  { path: '/home', component: AppHome, name: 'home' },
  { path: '/projects', component: AppProjects, name: 'projects'},
  { path: '/technologies', component: AppTechnologies, name: 'thecnologies' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router};
import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppProjects from '../pages/AppProjects.vue'
import AppTechnologies from '../pages/AppTechnologies.vue'
import AppSingleProject from '../pages/AppSingleProject.vue'

const routes = [
  { path: '/', component: AppHome, name: 'home' },
  { path: '/projects', component: AppProjects, name: 'projects'},
  { path: '/technologies', component: AppTechnologies, name: 'technologies' },
  { path: '/projects/:project', component: AppSingleProject, name: 'project.show' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router};
import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Error404 from './pages/Error404.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import TypeProjects from './pages/TypeProjects.vue';
import TechnologyProjects from './pages/TechnologyProjects.vue';

const router = createRouter ({

  history:createWebHistory(),


  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/type-projects/:slug',
      name: 'typeProjects',
      component: TypeProjects
    },
    {
      path: '/technology-projects/:slug',
      name: 'technologyProjects',
      component: TechnologyProjects
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    },

  ]




})

export {router}
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home'
import City from '../views/City'


Vue.use(Router);

const routes = [
    {
        name: Home,
        path: '/',
        component: Home,
    },
    {
        name: City,
        path: '/city/:id',
        component: City,
    },
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  
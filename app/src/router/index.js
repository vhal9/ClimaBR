import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home'
import City from '../views/City'


Vue.use(Router);

/**
 * Controle de rotas da aplicação
 */
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/city/:id',
        name: 'City',
        component: City,
    },
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  
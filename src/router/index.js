import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import { authGuard } from "../auth/authGuard"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/register/Register.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/',
      name: 'home',
   // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/home/Home.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/lobbies',
      name: 'lobbies',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/components/lobby/LobbyScreen.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/deckbuilder',
      name: 'deckbuilder',
   // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/Views/Deckbuilder.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/shop',
      name: 'shop',
   // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/Views/Shop.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/quests',
      name: 'quests',
   // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/Views/Quests.vue'),
      beforeEnter: authGuard
    },


    {
      path: '/gamelobby',
      name: 'gamelobby',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/Views/GameLobby.vue'),
      beforeEnter: authGuard
    },


    {
      path: '/game',
      name: 'game',
   // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/Views/Game.vue'),
      beforeEnter: authGuard
    },
  ]
})

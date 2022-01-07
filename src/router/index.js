import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Rent from "../components/CRent"
import Slider from "../components/CSlider"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Slider
  },
  {
    path: '/rent',
    name: 'Rent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Rent
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

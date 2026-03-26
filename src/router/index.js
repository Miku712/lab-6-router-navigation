import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/catalog', component: CatalogView },
  { path: '/catalog/:id', component: ProductDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
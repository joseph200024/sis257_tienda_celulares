import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
      children: [
        { path: '', component: () => import('../components/usuario/UsuarioList.vue') },
        { path: 'crear', component: () => import('../components/usuario/UsuarioCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/usuario/UsuarioEdit.vue')
        }
      ]
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: () => import('../views/ProveedoreView.vue'),
      children: [
        { path: '', component: () => import('../components/proveedore/ProveedoreList.vue') },
        { path: 'crear', component: () => import('../components/proveedore/ProveedoreCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/proveedore/ProveedoreEdit.vue')
        }
      ]
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriasView.vue'),
      children: [
        { path: '', component: () => import('../components/categorias/categoriaList.vue') },
        { path: 'crear', component: () => import('../components/categorias/categoriaCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/categorias/categoriaEdit.vue')
        }
      ]
    },
    {
      path: '/colores',
      name: 'colores',
      component: () => import('../views/ColoresView.vue'),
      children: [
        { path: '', component: () => import('../components/colores/coloresList.vue') },
        { path: 'crear', component: () => import('../components/colores/coloresCreate.vue') },
        { path: 'editar/:id', component: () => import('../components/colores/coloresEdit.vue') }
      ]
    },
    {
      path: '/celulares',
      name: 'celulares',
      component: () => import('../views/CelularesView.vue'),
      children: [
        { path: '', component: () => import('../components/celulares/celularesLit.vue') },
        { path: 'crear', component: () => import('../components/celulares/celularesCreate.vue') },
        { path: 'editar/:id', component: () => import('../components/celulares/celularesEdit.vue') }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router

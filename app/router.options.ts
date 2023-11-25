import type { RouterConfig } from "nuxt/schema"

export default <RouterConfig> {
    routes: () => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/index.vue').then(r => r.default || r)
        },
        {
            name: 'diagramma',
            path: '/static',
            component: () => import('~/pages/static.vue').then(r => r.default || r)
        },
        {
            name: 'facility',
            path: '/facilities/:id',
            component: () => import('~/pages/facilities/[id].vue').then(r => r.default || r)
        },
        {
            name: 'cerca',
            path: '/facilities/:term?/:typology?/:regions?/:level?',
            component: () => import('~/pages/facilities/[[term]]/[[typology]]/[[regions]]/[[level]].vue').then(r => r.default || r)
        }
    ]
}
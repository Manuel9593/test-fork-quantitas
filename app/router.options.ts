import type { RouterConfig } from "nuxt/schema"

export default <RouterConfig> {
    routes: () => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/index.vue').then(r => r.default || r),
        },
        {
            name: 'diagramma',
            path: '/static',
            component: () => import('~/pages/static.vue').then(r => r.default || r)
        },
        {
            name: 'facility',
            path: '/facility/:id',
            component: () => import('~/pages/facility/[id].vue').then(r => r.default || r)
        },
        {
            name: 'cerca',
            path: '/facilities/:term?/:regions?/:typology?',
            component: () => import('~/pages/facilities/[[term]]/[[regions]]/[[typology]]/index.vue').then(r => r.default || r)
        }
    ]
}
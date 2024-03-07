const Routing = {
  base: '/',
  routeNameSplitter: '/',
  extendRoutes (routes, resolve) {
    routes.push(
      {
        name: 'home',
        path: '/',
        component: resolve(__dirname, '../pages/index.vue')
      },
      {
        name: 'diagram',
        path: '/diagramma',
        component: resolve(__dirname, '../pages/static/diagram.vue')
      },
      {
        name: 'search',
        path: '/cerca/:term?/:regions?/:typology?/:level?',
        component: resolve(__dirname, '../pages/facilities/_term/_typology/_regions/_level/search.vue')
      },
      {
        name: 'facility',
        path: '/struttura/:id?',
        component: resolve(__dirname, '../pages/facilities/_id/facility.vue')
      }
    )
  }
}
export default Routing

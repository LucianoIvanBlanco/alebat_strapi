module.exports = {
    routes: [
      { // Ruta personalizada para buscar platos de tipo postre dentro del menu
        method: 'GET',
        path: '/menus-diarios/findDessert',
        handler: 'api::menu-diario.menu-diario.findDessert',
        config: {
          auth: false,
        },
      },
    ],
};

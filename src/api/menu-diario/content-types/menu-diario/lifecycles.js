const { Component } = require("react");

async function updateMenuPrecio(id) {
   
    const menuData = await strapi.entityService.findOne('api::menu-diario.menu-diario', id, {
      populate: ['primero', 'segundo', 'postre'],
    });

    console.log(menuData);
  
    let sum_precio_actual = 0;
  
  
    if (menuData.primero) {
      sum_precio_actual += menuData.primero.precio;
    }
    if (menuData.segundo) {
      sum_precio_actual += menuData.segundo.precio;
    }
    if (menuData.postre) {
      sum_precio_actual += menuData.postre.precio;
    }
  
    
    await strapi.entityService.update('api::menu-diario.menu-diario', id, {
      data: { sum_precio: sum_precio_actual },
    });
  }
  
  module.exports = {
    async afterCreate(event) {
      await updateMenuPrecio(event.result.id);
    },
  
    async afterUpdate(event) {
      const{ result, params} = event;
      // Comprobamos si se modifico algun plato
      if (params.data.primero || params.data.segundo || params.data.postre) 
          await updateMenuPrecio(event.result.id);
    },
  };


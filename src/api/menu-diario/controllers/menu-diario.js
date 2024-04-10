'use strict';

/**
 * menu-diario controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::menu-diario.menu-diario', ({strapi}) => ({
    
    
    async findDessert(ctx) {

        const menusDiarios = await strapi.entityService.findMany('api::menu-diario.menu-diario', {
            populate: 'postre',
        });

        const postres = menusDiarios
        .filter( menu => menu.postre && menu.postre.tipo_plato === 'Postre' )
        .map( menu => {

            return { nombre:menu.postre.nombre};
        });

        ctx.body = postres;
        console.log(postres);
    }
}));
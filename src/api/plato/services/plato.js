'use strict';

/**
 * plato service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::plato.plato');

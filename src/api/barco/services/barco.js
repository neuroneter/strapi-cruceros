'use strict';

/**
 * barco service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::barco.barco');

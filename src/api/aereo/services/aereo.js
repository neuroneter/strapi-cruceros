'use strict';

/**
 * aereo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aereo.aereo');

'use strict';

/**
 * test-ride service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-ride.test-ride');

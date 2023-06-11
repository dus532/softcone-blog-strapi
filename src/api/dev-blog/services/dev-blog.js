'use strict';

/**
 * dev-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dev-blog.dev-blog');

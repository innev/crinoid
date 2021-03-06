"use strict";

/**
 * App Literal
 */
const Literal = {
    DEFAULT_CONFIG_PATH: 'conf',
    FEATURES_PATH: 'features',
    APP_CFG_NAME: 'app',
    DEFAULT_BOOTSTRAP_PATH: 'bootstrap',
    DEFAULT_TIMEZONE: 'Asia/Shanghai',
    MODELS_PATH: 'models'
};

/**
 * Common constants
 * @module Literal
 * 
 * @example
 *   const Literal = require('@genx/server/lib/enum/Literal');
 */

/**
 * Common constant definitions.
 * @readonly
 * @enum {string}
 */

module.exports = Object.assign({}, Literal, {
    /**
     * App modules path
     */
    APP_MODULES_PATH: 'app_modules',     

    /**
     * Backend files path
     */
    BACKEND_PATH: 'server',   

    /**
     * Backend source files path
     */
    BACKEND_SRC_PATH: 'src',   

    /**
     * Frontend source files path, e.g. react source
     */
    CLIENT_SRC_PATH: 'client',

    /**
     * Frontend static files path, e.g. images, css, js
     */
    PUBLIC_PATH: 'public',

    /**
     * Middleware files path
     */
    MIDDLEWARES_PATH: 'middlewares',    

    /**
     * Server-wide config file name
     */
    SERVER_CFG_NAME: 'server',    

    /**
     * Server features path
     */
    SERVER_FEATURES_PATH: 'serverFeatures',

    /**
     * App specific features path
     */
    APP_FEATURES_PATH: 'appFeatures',

    /**
     * Controllers files path, under backend folder
     */
    CONTROLLERS_PATH: 'controllers',

    /**
     * Controllers files path, under backend folder
     */
    RESOURCES_PATH: 'resources',

    /**
     * Views files path, under backend folder
     */
    VIEWS_PATH: 'views',

    /**
     * Locale dictionary files path
     */
    LOCALE_PATH: 'locale',

    /**
     * Allowed http methods
     */
    ALLOWED_HTTP_METHODS: new Set(['options', 'get', 'head', 'post', 'put', 'delete', 'trace', 'connect'])
});
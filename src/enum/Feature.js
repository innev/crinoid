"use strict";

module.exports = {
  CONF: 'Configure',
  INIT: 'Initial',
  SERVICE: 'Services',
  PLUGIN: 'Plugins',
  READY: 'Ready',
  validate: function (featureObject) {
    return featureObject && featureObject.hasOwnProperty('type') && typeof featureObject.load_ === 'function';
  }
};
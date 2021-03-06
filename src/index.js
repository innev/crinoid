"use strict";

const Enums = {
    Literal: require('./enum/Literal'),
    Feature: require('/enum/Feature')
};

const Patterns = require('./patterns');

module.exports = {    
    WebServer: require('./WebServer'),    
    Errors: require('./utils/Errors'),
    Helpers: require('./utils/Helpers'),
    Enums,    
    Patterns,        
    
    // compatible to legacy code
    enum: Enums, 
    http: Patterns.http,
    middleware: Patterns.middleware,    
    Controller: Patterns.Controller 
};
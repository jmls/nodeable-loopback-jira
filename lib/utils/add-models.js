"use strict";
const resources = require('../resource');
const ModelBuilder = require('loopback-datasource-juggler').ModelBuilder;
const builder = new ModelBuilder();
exports = (dataSource) => {
    Object.keys(resources).forEach((key) => {
        let Model = builder.define(key, {});
        Model.attachTo(dataSource);
    });
};

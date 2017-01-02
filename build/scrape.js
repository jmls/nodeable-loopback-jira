const request = require('request');
const cheerio = require('cheerio');
const changeCase = require('change-case');
const pluralize = require('pluralize');
const config = require("./config");

request(config.url, (error, response, html) => {

    if (error) {
        console.log(error);
        process.exit(1);
    }

    let $ = cheerio.load(html);

    let api = {};

    $('.resource').filter(function () {

        let resource = $(this);
        let h3 = resource.children().first();
        let basePath = h3.attr('id');

        let resourceName = changeCase.upperCaseFirst(basePath.split('/').pop());

        if (resourceName === '') { // special case for permissions
            resourceName = "Permissions";
        }

        if (resourceName === 'Application-properties') { // special case for Application-Properties
            resourceName = "ApplicationProperties";
        }

        let description = h3.next();

        api[resourceName] = {
            name: resourceName,
            description: description.is('p') ? description.text() : '',
            methods: {}
        };

        $('.method', resource).filter(function () {
            let method = {
                urlParams:[],
                schema:[],
                queryParams: []
            };

            let paramsInUse = {};

            let method$ = $(this);
            let methodHeader = method$.find('h4');
            let methodBody = method$.find('.method-body');

            method.description = methodHeader.find('a').text();
            method.name = methodHeader.attr('id').split('-').pop();

            if (method.name === `create${resourceName}`) {
                method.name = "create";
            }

            if (method.name === `delete${resourceName}`) {
                method.name = "deleteById";
            }

            if (method.name === `remove${resourceName}`) {
                method.name = "deleteById";
            }

            if (method.name === `update${resourceName}`) {
                method.name = "update";
            }

            if (method.name === `get${resourceName}`) {
                method.name = "findById";
            }

            if (method.name === `getAll${pluralize(resourceName)}`) {
                method.name = "find";
            }

            if (method.name === `find${pluralize(resourceName)}`) {
                method.name = "find";
            }

            // if (method.description !== "Create project") {
            //     return;
            // }

            method.details = methodBody.find('p').text();

            let result = methodHeader.find('code').text().split('/');
            method.verb = result[0].trim();

            result.shift();

            if (resourceName === 'Version') { // handle oddities in version api
                let url = result.join('/');

                if (url === 'rest/api/2/version/{versionId}/remotelink/{globalId}' || url === 'rest/api/2/version/{id}/removeAndSwap') {
                    return; // duplicate api calls from what I can see
                }
            }

            method.url = result.join('/').replace(/\}/g,'');

            if (method.url.indexOf('{') > -1) {
                let params = method.url.split('{');
                params.shift();

                params.forEach((param) => {
                    param = param.split('/')[0];

                    if (!paramsInUse[param]) {
                        method.urlParams.push({name: param, type: 'string'});
                        paramsInUse[param] = true;
                    }
                });
            }

            method.url = method.url.replace(/\{/g,':');

            if (resourceName === "Permissions") { // special case
                method.url = method.url.replace(/\/\//g,'/');

                if (method.name === 'findById') {
                    method.name = "myPermissions";
                    method.path = '/mypermissions';
                } else {
                    method.path = '/';
                }

            } else {
                let tmpPath = method.url.replace('rest/api/2','').split('/');

                tmpPath.shift();
                tmpPath.shift();

                method.path = '/' + tmpPath.join('/');
            }

            $("table.aui tr", methodBody).filter(function () {
                let row = $(this);

                let name = $("td", row).find('code').text();

                if (name === '') {
                    return;
                }

                let type = $("td", row).find('em').text();
                let description = $("td", row).find('p').text();

                if (!paramsInUse[name]) {
                    paramsInUse[name] = true;

                    method.queryParams.push({
                        name,
                        type: type === "int" || type === "long" ? 'number' : type,
                        description
                    });
                }
            });

            let request = $('h5',methodBody).filter(function() {
                return $(this).text().indexOf('Request') > -1;
            });

            request = request.next();

            $(request).each(function(index,element) {
                $(this).find('h6').each(function() {

                   if ($(this).text().indexOf('Schema') === -1) {
                       return;
                   }

                   let schema = JSON.parse($(this).next().find('code').text()).properties;
                   method.schema = [];

                   schema && Object.keys(schema).forEach((key) => {

                       if (!paramsInUse[key]) {
                           paramsInUse[key] = true;
                           method.schema.push({
                               name: key,
                               type: schema[key].type || 'Object'
                           });
                       }
                   });

                });

            });

            let response = $('h5',methodBody).filter(function() {
                return $(this).text().indexOf('Responses') > -1;
            });

            response = response.next();

            $(response).each(function(index,element) {
                method.responseType = null;

                ['Example','Schema'].forEach((responseType) => {

                    !method.responseType && $(this).find('h6').each(function() {
                       if ($(this).text().indexOf(responseType) === -1) {
                           return;
                       }

                        try {
                            let result = JSON.parse($(this).next().find('code').text());
                            method.responseType = Array.isArray(result) ? 'array' : 'object';

                        }

                        catch (e) {
                            method.responseType = 'object';
                        }

                    });
                });
            });

            api[resourceName].methods[method.name] = method;

        });

    });

    console.log(JSON.stringify(api, null, 4));

});

const fs = require('fs');
const nj = require('nunjucks');

let source = fs.readFileSync('build/template.ts.hbs','utf8');

let api = require('../lib/resource/definition/api.json');
let resource = require('../lib/resource/baseResource').baseResource;

let resourceIndex = '';

Object.keys(api).forEach((model) => {
    let data = Object.assign({},resource.loadDefinition(model));

    data.methodArray = [];

    Object.keys(data.methods).forEach((key) => {
        data.methodArray.push(data.methods[key]);
    });

    data.methodArray.forEach((method) => {
        method.details = method.details.replace(/\r?\n|\r/g,'\n     *');
        method.params = [...method.urlParams,...method.queryParams];
        method.allParams = [...method.urlParams,...method.queryParams,...method.schema];

        if (method.tokenRequired) {
            method.allParams.push({name: 'token', type: 'string', description: 'The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used'});
        }

        method.allParams.forEach((param) => {

            if (method.rules && method.rules[param.name]) {
                param.rules = method.rules[param.name];
                method.rules[param.name].forEach((rule) => {
                    if (rule === 'required') {
                        param.required = true;
                    }
                });
            }
        });

        if (method.schema.length > 0) {
            method.params.push({name: 'data', type: 'object', http: { source: 'body' }});
        } else {
            if (method.tokenRequired) {
                method.params.push({name: 'token', type: 'string', description: 'The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used'});
            }
        }
    });

    let template = nj.renderString(source,data);

    fs.writeFile(`src/resource/${model}.ts`,template,'utf8',() => {});

    resourceIndex += `export * from "./${model}";\n`;
});

fs.writeFile(`src/resource/index.ts`,resourceIndex,'utf8',() => {});
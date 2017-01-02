const loopback = require('loopback');
module.exports = class Foo {
    constructor(app) {
        let Model = loopback.createModel("Project", {}, {
            base: 'Model'
        });
        // "method" is an object passed in as a parameter
        let remoteMethod = {
            accepts: [],
            name: "foo",
            description: "test foo",
            notes: "some notes",
            http: {
                verb: "post",
                path: "/"
            },
            returns: {
                arg: 'data',
                type: "object",
                root: true
            }
        };
        remoteMethod.accepts.push({ name: "data", type: "object", description: "update project", http: { source: "body" } });
        Model.remoteMethod("update", remoteMethod);
        app.model(Model, { public: true, dataSource: false });
    }
}
;

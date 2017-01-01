# loopback-connector-jira

## Overview

The nodeable LoopBack Jira library creates models to interact with the remote Jira APIs

![alt text](https://github.com/jmls/nodeable-loopback-jira/raw/master/img/explorer.png "jira Explorer")


## Installation

In your application root directory, enter:

```shell
$ npm install nodeable-loopback-jira --save
```

This will install the module from npm and add it as a dependency to the application's [package.json](http://loopback.io/doc/en/lb2/package.json.html) file.

## Using the jira models

```javascript
const app = module.exports = loopback();
const Jira = require('nodeable-jira');

const = new Jira(app,{options});

```
Start your app in the usual way. When the app has started, loopback models are created for each Jira API resource, with methods mirroring the Jira API methods.

Each model also exposes all of it's methods as remote API's, so they can be used in the explorer or by other rest services. See the *Customising* section for details on how to change this behaviour.

For example:

```javascript
app.models.Project.findById({...}).then((project) => {

}).catch((e) => {

});
```
or
```javascript
app.models.Project.findById({...},function(err,project) => {}


```

## Promises or callbacks

It's up to you to choose ;) Each method can be called with an options callback function, or used as a promise

### Options

```javascript
const = new Jira(app,{options});

```

the **options** object needs the following properties:

* host : the hostname of the jira instance you wish to use. For example `jira.nodeable.io`
* customFolder: the folder holding customisation files. See the *Customising* section for more details

### Customising

If you don't want a model to be exposed remotely, create a `<Resource>.json` file in a folder of your choice, and pass that folder as the `customFolder` option when creating the Jira instance.

each file can contain the following options

* `public` : boolean - is the model exposed remotely
* `methods` : object - a collection of method names
* `methods.<name>` : object - the definition for the method <name>
* `methods.<name>.public` - is this method exposed remotely

for example, if you didn't want to expose the `Project` resource, create a file called `Project.json` in the custom folder with the following options

```json
{
    "public": false,
}
```

if you wanted to hide the `create` method, you would change the contents to
```json
{
    "methods": {
        "create": {
            "public": false
        }
    }
}
```

you could also change / override the `description` and `details` properties of each model & method

### Documentation

All of the models and methods are documented using `jsdoc`, and are available in `docs/nodeable-loopback-jira/<version>` where `version` is the nodeable-loopback-jira version (not the jira version)

### Building

This library is built against the latest version of the Jira api (https://docs.atlassian.com/jira/REST/server). It does this by scraping the rest api documentation, and creating
an `api.json` file from the html. It then uses this `api.json` file to build the typescript classes in `src`. Finally, the typescript compiler transpiles down to javascript in `lib`

If you wanted to build against another version, then do the following:

* git clone the project
* create a new branch `jira-<version>` where <version> is the jira api version that you want to use
* change the `url` property in `build/config` to point to the jira rest api version
* `npm run scrape`
* `npm run build`
* `tsc`

test your resultant code - and then submit the changes as a Pull Request (as a new branch). This will allow us to build up a complete collection of all jira versions

### Testing

Basic testing is done using Mocha - the more tests submitted, the merrier ...

To run tests, `npm run tests` will run the entire suite of tests in the `tests` folder. It is recomended to use a fresh version of jira using a docker instance.

you will need to config the test in the file `tests\config.json`, with contents similar to
```json
{
    "host": "jiraHost",

    "users": {
        "admin": {
            "username": "adminUser",
            "password": "adminUserPassword"
        },

        "normal": {
            "username": "normalUser",
            "password": "normalUserPassword"
        }
    },

    "ssl": true
}
```

### License

MIT License

Copyright (c) 2017 nodeable ltd

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Boilerplate
===
[![Build Status](https://travis-ci.org/us10096698/boilerplate.svg?branch=master)](https://travis-ci.org/us10096698/boilerplate)

A minimum-viable Node.js(Express) + Angular webapp template with tests
+ [Pivotal Tracker project page](https://www.pivotaltracker.com/n/projects/1461010)

## Prerequisites
+ `node` installed
+ `gulp` installed
  - `$ npm i -g gulp`
+ `eslint` installed
  - `$ npm i -g eslint`
+ (Optional) A Bluemix account created

## Quickstart
```
$ git clone https://github.com/us10096698/boilerplate.git
$ cd /path/to/boilerplate
& ./scripts/init.sh <APPNAME>
$ npm i && bower i
$ npm start 
```

Then you can access [the site](http://localhost:3000).

## Test
All test specs are at `test` directory and will be executed by corresponded `gulp` tasks.
I prefer [Jasmine](http://jasmine.github.io/2.0/introduction.html) for Javascript testing.

```
# server-side unit testing
$ gulp jasmine

# client-side unit testing
$ gulp karma

# Overall Unit Testing (jasmine + karma)
$ gulp unit

# e2e testing
$ gulp e2e
```

## Deploy to Cloud Foundry (Bluemix, Pivotal Web Services, ...)
If you have an account of Cloud Foundry based PaaS, you can deploy the app on it.
You have to target and log in to the PaaS before you push.

```
$ cf /path/to/boilerplate
$ cf push -f manifest.yml
```

+ Deploy configuration is defined in `manifest.yml`.
  - [Official Document](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)

## Lint
This repository uses `eslint` for linting Javascript codes.

+ `$ gulp lint` will execute ESLint check.
+ It also uses [ESlint plugin for Angular](https://github.com/Gillespie59/eslint-plugin-angular) for Angular codes.
  - This plugin is based on [Angular Style Guide](https://github.com/johnpapa/angular-styleguide).


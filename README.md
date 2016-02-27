Boilerplate
===
[![Build Status](https://travis-ci.org/us10096698/boilerplate.svg?branch=master)](https://travis-ci.org/us10096698/boilerplate)
![Npm Status](https://david-dm.org/us10096698/boilerplate.svg)

A minimum-viable Node.js(Express) + Angular webapp template with tests
+ [Pivotal Tracker project page](https://www.pivotaltracker.com/n/projects/1461010)

## Prerequisites
+ `node` installed
+ `gulp` and `bower` installed
  - `$ npm i -g gulp`
  - `$ npm i -g bower`
+ `eslint` installed
  - `$ npm i -g eslint`
+ (Optional) A Cloud Foundry based PaaS account created

## Quickstart
```
$ git clone https://github.com/us10096698/boilerplate.git
$ cd /path/to/boilerplate
& ./src/scripts/init.sh <APPNAME>
$ npm i && bower i
$ npm start 
```

Then you can access [the site](http://localhost:3000).

## Gulp tasks
Check `$ gulp help`.

## Deploy to Cloud Foundry (Bluemix, Pivotal Web Services, ...)
If you have an account of Cloud Foundry based PaaS, you can deploy the app on it.

__NOTE__: You have to target and log in to the PaaS before you push.

```
$ cf /path/to/boilerplate
$ NODE_ENV=production gulp build
$ cf push -f manifest.yml
```

+ Deploy configuration is defined in `manifest.yml`.
  - [Official Document](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)


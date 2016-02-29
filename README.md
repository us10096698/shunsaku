Shunsaku
===
[![Build Status](https://travis-ci.org/us10096698/shunsaku.svg?branch=master)](https://travis-ci.org/us10096698/shunsaku)
![Npm Status](https://david-dm.org/us10096698/shunsaku.svg)

An English training(fungo) application (w/ Watson Text-to-Speech)
+ [Pivotal Tracker project page](https://www.pivotaltracker.com/n/projects/1461394)

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
$ git clone https://github.com/us10096698/shunsaku.git
$ cd /path/to/shunsaku
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
$ cf /path/to/shunsaku
$ NODE_ENV=production gulp build
$ cf push -f manifest.yml
```

+ Deploy configuration is defined in `manifest.yml`.
  - [Official Document](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)


'use strict';

const ajax = require('../data/skills/ajax.js');
const algorithmAnalysisAndDesign = require('../data/skills/algorithmAnalysisAndDesign.js');
const angular = require('../data/skills/angular.js');
const ansible = require('../data/skills/ansible.js');
const aws = require('../data/skills/aws.js');
const babel = require('../data/skills/babel.js');
const bem = require('../data/skills/bem.js');
const binaryData = require('../data/skills/binaryData.js');
const bootstrap = require('../data/skills/bootstrap.js');
const canvas = require('../data/skills/canvas.js');
const chromeDevTools = require('../data/skills/chromeDevTools.js');
const cicd = require('../data/skills/cicd.js');
const codeCommenting = require('../data/skills/codeCommenting.js');
const collectionsAPI = require('../data/skills/collectionsAPI.js');
const computerScience = require('../data/skills/computerScience.js');
const css = require('../data/skills/css.js');
const cssInJs = require('../data/skills/cssInJs.js');
const cyberSecurityBasics = require('../data/skills/cyberSecurityBasics.js');
const dataStructuresRealisation = require('../data/skills/dataStructuresRealisation.js');
const databasesAdvanced = require('../data/skills/databasesAdvanced.js');
const databasesBasics = require('../data/skills/databasesBasics.js');
const designPatterns = require('../data/skills/designPatterns.js');
const designPrinciples = require('../data/skills/designPrinciples.js');
const developmentPatterns = require('../data/skills/developmentPatterns.js');
const django = require('../data/skills/django.js');
const docker = require('../data/skills/docker.js');
const elasticSearch = require('../data/skills/elasticSearch.js');
const electron = require('../data/skills/electron.js');
const emmet = require('../data/skills/emmet.js');
const enginesJs = require('../data/skills/enginesJs.js');
const es6 = require('../data/skills/es6.js');
const eslint = require('../data/skills/eslint.js');
const express = require('../data/skills/express.js');
const figma = require('../data/skills/figma.js');
const firebase = require('../data/skills/firebase.js');
const flask = require('../data/skills/flask.js');
const flux = require('../data/skills/flux.js');
const functionalProgramming = require('../data/skills/functionalProgramming.js');
const git = require('../data/skills/git.js');
const graphQL = require('../data/skills/graphQL.js');
const grpc = require('../data/skills/grpc.js');
const gulp = require('../data/skills/gulp.js');
const gunicorn = require('../data/skills/gunicorn.js');
const html = require('../data/skills/html.js');
const http = require('../data/skills/http.js');
const interpretersPython = require('../data/skills/interpretersPython.js');
const jUnit = require('../data/skills/jUnit.js');
const javaSE = require('../data/skills/javaSE.js');
const javadoc = require('../data/skills/javadoc.js');
const javascriptAdvanced = require('../data/skills/javascriptAdvanced.js');
const javascriptBasics = require('../data/skills/javascriptBasics.js');
const jdk = require('../data/skills/jdk.js');
const jenkins = require('../data/skills/jenkins.js');
const jest = require('../data/skills/jest.js');
const jquery = require('../data/skills/jquery.js');
const jre = require('../data/skills/jre.js');
const jsDebugging = require('../data/skills/jsDebugging.js');
const jsdoc = require('../data/skills/jsdoc.js');
const json = require('../data/skills/json.js');
const jwt = require('../data/skills/jwt.js');
const kafka = require('../data/skills/kafka.js');
const koa = require('../data/skills/koa.js');
const libuvAsynchronousIO = require('../data/skills/libuvAsynchronousIO.js');
const linuxAdvanced = require('../data/skills/linuxAdvanced.js');
const linuxBasics = require('../data/skills/linuxBasics.js');
const makefile = require('../data/skills/makefile.js');
const markdown = require('../data/skills/markdown.js');
const memcached = require('../data/skills/memcached.js');
const memoryJava = require('../data/skills/memoryJava.js');
const memoryJs = require('../data/skills/memoryJs.js');
const memoryLeaksJs = require('../data/skills/memoryLeaksJs.js');
const microservicesArchitecture = require('../data/skills/microservicesArchitecture.js');
const mongoDB = require('../data/skills/mongoDB.js');
const nestjs = require('../data/skills/nestjs.js');
const networkAdvanced = require('../data/skills/networkAdvanced.js');
const nextjs = require('../data/skills/nextjs.js');
const nginx = require('../data/skills/nginx.js');
const ngrx = require('../data/skills/ngrx.js');
const nodejsAdvanced = require('../data/skills/nodejsAdvanced.js');
const nodejsBasics = require('../data/skills/nodejsBasics.js');
const nodejsIoT = require('../data/skills/nodejsIoT.js');
const nodejsNativeCppModules = require('../data/skills/nodejsNativeCppModules.js');
const npm = require('../data/skills/npm.js');
const nuxtjs = require('../data/skills/nuxtjs.js');
const oAuth = require('../data/skills/oAuth.js');
const oop = require('../data/skills/oop.js');
const optimizationJs = require('../data/skills/optimizationJs.js');
const p2p = require('../data/skills/p2p.js');
const pip = require('../data/skills/pip.js');
const pm2 = require('../data/skills/pm2.js');
const postgresql = require('../data/skills/postgresql.js');
const postman = require('../data/skills/postman.js');
const prettier = require('../data/skills/prettier.js');
const protobuf = require('../data/skills/protobuf.js');
const pug = require('../data/skills/pug.js');
const pwa = require('../data/skills/pwa.js');
const pythonAdvanced = require('../data/skills/pythonAdvanced.js');
const pythonBasics = require('../data/skills/pythonBasics.js');
const pythonTooling = require('../data/skills/pythonTooling.js');
const pythonVirtualEnv = require('../data/skills/pythonVirtualEnv.js');
const rabbitMQ = require('../data/skills/rabbitMQ.js');
const react = require('../data/skills/react.js');
const reactNative = require('../data/skills/reactNative.js');
const redis = require('../data/skills/redis.js');
const redux = require('../data/skills/redux.js');
const refactoring = require('../data/skills/refactoring.js');
const regularExpressions = require('../data/skills/regularExpressions.js');
const rest = require('../data/skills/rest.js');
const rxjs = require('../data/skills/rxjs.js');
const sass = require('../data/skills/sass.js');
const securityJava = require('../data/skills/securityJava.js');
const semanticHTML = require('../data/skills/semanticHTML.js');
const seo = require('../data/skills/seo.js');
const softwareArchitecture = require('../data/skills/softwareArchitecture.js');
const ssh = require('../data/skills/ssh.js');
const ssl = require('../data/skills/ssl.js');
const strapi = require('../data/skills/strapi.js');
const streamAPI = require('../data/skills/streamAPI.js');
const tcp = require('../data/skills/tcp.js');
const tddbdd = require('../data/skills/tddbdd.js');
const tomcat = require('../data/skills/tomcat.js');
const touchTyping = require('../data/skills/touchTyping.js');
const typescript = require('../data/skills/typescript.js');
const udp = require('../data/skills/udp.js');
const vsCode = require('../data/skills/vsCode.js');
const vue = require('../data/skills/vue.js');
const vuetify = require('../data/skills/vuetify.js');
const vuex = require('../data/skills/vuex.js');
const webAssembly = require('../data/skills/webAssembly.js');
const webFrameworkJava = require('../data/skills/webFrameworkJava.js');
const webGL = require('../data/skills/webGL.js');
const webRTC = require('../data/skills/webRTC.js');
const webSockets = require('../data/skills/webSockets.js');
const webpack = require('../data/skills/webpack.js');
const weinre = require('../data/skills/weinre.js');

const skills = [
  ajax,
  algorithmAnalysisAndDesign,
  angular,
  ansible,
  aws,
  babel,
  bem,
  binaryData,
  bootstrap,
  canvas,
  chromeDevTools,
  cicd,
  codeCommenting,
  collectionsAPI,
  computerScience,
  css,
  cssInJs,
  cyberSecurityBasics,
  dataStructuresRealisation,
  databasesAdvanced,
  databasesBasics,
  designPatterns,
  designPrinciples,
  developmentPatterns,
  django,
  docker,
  elasticSearch,
  electron,
  emmet,
  enginesJs,
  es6,
  eslint,
  express,
  figma,
  firebase,
  flask,
  flux,
  functionalProgramming,
  git,
  graphQL,
  grpc,
  gulp,
  gunicorn,
  html,
  http,
  interpretersPython,
  jUnit,
  javaSE,
  javadoc,
  javascriptAdvanced,
  javascriptBasics,
  jdk,
  jenkins,
  jest,
  jquery,
  jre,
  jsDebugging,
  jsdoc,
  json,
  jwt,
  kafka,
  koa,
  libuvAsynchronousIO,
  linuxAdvanced,
  linuxBasics,
  makefile,
  markdown,
  memcached,
  memoryJava,
  memoryJs,
  memoryLeaksJs,
  microservicesArchitecture,
  mongoDB,
  nestjs,
  networkAdvanced,
  nextjs,
  nginx,
  ngrx,
  nodejsAdvanced,
  nodejsBasics,
  nodejsIoT,
  nodejsNativeCppModules,
  npm,
  nuxtjs,
  oAuth,
  oop,
  optimizationJs,
  p2p,
  pip,
  pm2,
  postgresql,
  postman,
  prettier,
  protobuf,
  pug,
  pwa,
  pythonAdvanced,
  pythonBasics,
  pythonTooling,
  pythonVirtualEnv,
  rabbitMQ,
  react,
  reactNative,
  redis,
  redux,
  refactoring,
  regularExpressions,
  rest,
  rxjs,
  sass,
  securityJava,
  semanticHTML,
  seo,
  softwareArchitecture,
  ssh,
  ssl,
  strapi,
  streamAPI,
  tcp,
  tddbdd,
  tomcat,
  touchTyping,
  typescript,
  udp,
  vsCode,
  vue,
  vuetify,
  vuex,
  webAssembly,
  webFrameworkJava,
  webGL,
  webRTC,
  webSockets,
  webpack,
  weinre,
];

const getSkillsFromFS = () => skills;

module.exports = getSkillsFromFS;

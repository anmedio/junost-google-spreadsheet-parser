'use strict';

// Tests
const { equal } = require('.');

// Mock data
const data = require('./mocks/data');

const { sayHello } = require('../helpers');

equal('Should return the "Hello" text', sayHello(), data.hello.text);

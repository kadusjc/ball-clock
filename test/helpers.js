'use strict'

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

global.chai = chai
global.sinon = sinon
global.expect = chai.expect

chai.use(sinonChai)

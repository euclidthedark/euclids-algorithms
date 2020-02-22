const chai = require('chai');
const sinon = require('sinon');
const chaiThings = require('chai-things');

chai.use(chaiThings);

global.expect = chai.expect;
global.sinon = sinon;

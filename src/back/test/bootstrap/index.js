process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chaiHttp = require('chai-http');

global.chai = require('chai');
global.should = global.chai.should();
global.expect = global.chai.expect;
global.server = require('../../index');

chai.use(chaiHttp);

const test = require('./helloWorld');
const owm = require('./owm');
const cities = require('./cities');

exports.test = test.helloWorld;
exports.owmOnWrite = owm.onWrite;
exports.citiesOnWriteUpdate = cities.onWriteUpdate;
exports.citiesOnWriteRead   = cities.onWriteRead;

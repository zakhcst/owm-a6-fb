
const test = require('./helloWorld');
const owm = require('./owm');
const cities = require('./cities');
const getip = require('./get-ip');

exports.test = test.helloWorld;
exports.owmOnWrite = owm.onWrite;
exports.citiesOnWriteUpdate = cities.onWriteUpdate;
exports.citiesOnWriteRead   = cities.onWriteRead;
exports.getip = getip.getip;

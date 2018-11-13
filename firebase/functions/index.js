const functions = require('firebase-functions');
const admin = require('firebase-admin');

const fetch = require('node-fetch');


let db = admin.database()

exports.helloWorld = functions.https.onRequest(async (request, response) => {
  response.send('Hello from Firebase!!!!');
});

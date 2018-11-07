const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log(process.env);
  response.send("Hello from Firebase!!!!");
});

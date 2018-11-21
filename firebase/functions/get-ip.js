const functions = require('firebase-functions');

exports.getip = functions.https.onRequest(async (request, response) => {
  response.send(request.headers['x-appengine-user-ip']);
});

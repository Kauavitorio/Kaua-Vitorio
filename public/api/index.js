const functions = require("firebase-functions");

const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);


exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

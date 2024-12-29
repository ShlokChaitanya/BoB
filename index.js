const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
let initial_path = path.join(__dirname, "./");
const bob = express();


bob.use(express.static(initial_path));

bob.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"))
})

bob.get('/bob', (req, res) => {
    res.send

bob.listen("3000", () => {
    console.log('listening......');
})

exports.bob = functions.https.onRequest(bob);
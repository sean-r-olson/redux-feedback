const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/allResponses', (req,res) => {
    console.log('in /allResponses', req.body);
    const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`;
    const values = [req.body.feelingsResponseReducer, req.body.understandingResponseReducer, req.body.supportedResponseReducer, req.body.commentsResponseReducer];
    pool.query(query, values).then((results) => {
        console.log('success with INSERT into db', req.body);
        res.sendStatus(201);
    }).catch((err) => {
        console.log('error with INSTERT:', err);
        res.sendStatus(500);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
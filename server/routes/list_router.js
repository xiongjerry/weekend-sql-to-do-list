const express = require("express");
const router = express.Router();

const pool = require("../module/pool");

// DB Routes

// GET Route
router.get('/', (req, res) => {
    // variable to hold sql command
    let queryText = 'SELECT * FROM "toDoList" ORDER BY "id";';
    
    pool.query(queryText)
    // make that promise
    .then( result => {
        // send the results in an object
        res.send(result.rows);
    })
    .catch( error => {
        console.log('Error obtainig tasks', error);
        // send back a 500 error
        res.sendStatus(500);
    });
});
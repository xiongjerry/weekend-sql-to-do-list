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
        console.log('Error obtaining tasks', error);
        // send back a 500 error
        res.sendStatus(500);
    });
});

// POST Route
router.post('/',  (req, res) => {
    let newTask = req.body;
    console.log(`Adding new task`, newTask);
  
    let queryText = `INSERT INTO "toDoList" ("task")
                     VALUES ($1);`;
    pool.query(queryText, [newTask.task])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding task`, error);
        res.sendStatus(500);
      });
  });

// PUT Route
router.put('/:id', (req, res) =>{
    const taskListUpdate = req.params.id;
    console.log('task updated to complete', taskListUpdate);
    // make queryString target ready-to-transfer column and make boolean true
    const queryString = `UPDATE "toDoList" SET "completed"= 'Yup!' WHERE "toDoList".id = $1;`; 

    pool.query(queryString, [taskListUpdate])
    .then( response => {
        console.log(response);
        console.log(`task updated with id ${taskListUpdate}`);
        res.sendStatus(200); // confirms on client side that info updated
    }).catch((err) => {
        console.log('error in server', err);
        res.sendStatus(500); // shows error on this server route
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {
    // Grab the task to delete
    const taskToDelete = req.params.id
    const queryText = `DELETE FROM "toDoList" WHERE "toDoList".id = $1;`;
    console.log('task to Delete', taskToDelete)
    // taskToDelete must be sent in an array
    pool.query(queryText, [taskToDelete])
    .then(result => {
        console.log(`Deleted task with id ${taskToDelete}`);
        // send OK message
        res.sendStatus(200)
    }).catch(error => {
        console.log(error);
        // Send back a 500 status error
        res.sendStatus(500)
    })
})

module.exports = router;
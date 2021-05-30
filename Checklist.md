Initialization
    
    [x] Make Folders named server: mkdir server, cd server --> mkdir modules , mkdir public , mkdir routes
    [x] cd modules , touch pool.js
    [x] cd server/public/ , touch index.html , mkdir scripts , mkdir styles ,  mkdir vendors

    [x] Make server.js, .gitignore (put node_modules/ in .gitignore), package.json (npm init --yes)
    [x] npm install, npm install express and npm install pg, touch DATABASE.sql
    [x] make database on postico
    [ ] make public files, touch style.css , client.js , jquery.js , bootstrap.css
    [ ] link public files on html
    
    [ ] connect server to database via pool
    [ ] copy SQL table on database into DATABASE.sql
    [ ] In router folder, touch list_router.js
    [ ] setup server with app and express on server.js
    [ ] create imports into list_router.js

Server Side - CRUD

    [ ] create GET route using pool to draw from SQL database
    [ ] create POST route with pool
    [ ] make PUT route to toggle boolean
    [ ] make DELETE route to delete database

Client Side - CRUD

    [ ] make html: create a header 'to do list' , make a input 'task' , create a button 'submit'
    [ ] give them proper id/class || also make an output via table tags with ids and classes 

    [ ] make a function to update DOM via append || append complete checkbox and delete button here
    [ ] connect GET route
    [ ] make click listener function
    [ ] connect POST route to submit button || Post route should change DOM with some indicator
    [ ] connect PUT route
    [ ] connect DELETE route

Stretch

    [ ] do styling with bootstrap - Using GIT branching
console.log("js loaded");

$(document).ready(function () {
  console.log("JQ loaded");

// function to hold click listener
  clickListeners();

// get database task list to client side
  getTaskList();
})

// GET route request
function getTaskList(){
    console.log("Displaying Task List");
    // ajax call to server to get task
    $.ajax({
      method: 'GET',
      url: '/list'
    }).then( response => {
      // console log the response
      console.log(response);
      // display task list by calling render function
      renderTaskList(response);
    }).catch( err => {
      // console log the error
      console.log('Error in GET Route', err);
    });
} // end getTaskList

function renderTaskList( lists ){
    // empty DOM to update after each input
    $('#viewList').empty();

    // loop through list for DB values
    for (let i = 0; i < lists.length; i++) {
        let list = lists[i];
    // append to DOM each task added to list
    $('#viewList').append(`
    <tr>
      <td>${list.task}</td>
      <td>
      ${list.completed}
      <input type="checkbox" class="checkTask" data-id="${list.id}">
      </td>
      <td><button class="deleteBtn" data-id="${list.id}">Delete</button></td>
    </tr>
    `);
    }
}
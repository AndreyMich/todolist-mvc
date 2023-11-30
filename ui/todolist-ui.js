/**
 *  Here we will write JS that will interact with the DOM
 *  No business logic should be here.
 *  The coe that manage the list is in todolist.js
 */


/**
 * call this function everytime you want to
 * update the UI with the list.
 * for example:, when you add a new task, or remove a task.
 */
function updateTheUiWithTheList() {
  // get the list element, and draw the list
  const listElement = document.querySelector('#list');

  listElement.innerHTML = '';

  // "UI" Logic. how to draw the list.
  // not how to create  or manage the list!
  list.forEach(function (item) {
    // create the li element "<li>"
    const li = document.createElement('li');

    // create the button element "<button>"
    const btn = document.createElement('button');

    // create the checkbox element "<input type="checkbox">"
    const checkbox = document.createElement('input');

    // set the type of the checkbox to "checkbox"
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;


    // set the text of the li to the title of the task
    // example: <li>buy milk</li>
    li.innerText = item.title;

    // set the text of the button to "X"
    // example: <button>X</button>
    btn.innerText = 'X';

    // add a click event listener to the button
    // when the user click the button, we will remove the task from the list.
    // we will call the removeItemFromList function (located in the 'brain' - todo-list.js)
    // and update the UI with the list call updateTheUiWithTheList
    btn.addEventListener('click', function () {
      removeItemFromList(item.id);
      updateTheUiWithTheList();
    });

    li.appendChild(btn);
    li.appendChild(checkbox);
    listElement.appendChild(li);
  });
}

/**
 *  This function will be called when the user click the "add task" button.
 *  It will read the value from the input field, and call the addItemsToList function
 *  (located in th 'brain' - todo-list.js)
 *  Finally, it will update the UI with the list (call updateTheUiWithTheList)
 */
function addTask() {
  const newTaskValue = document.querySelector('#newTask').value;

  addItemsToList(newTaskValue);
  updateTheUiWithTheList();
}

function clearAllCompleted() {
  clearAllCompletedTasks();
  updateTheUiWithTheList();
}

// for starter - update the UI with the list
updateTheUiWithTheList();


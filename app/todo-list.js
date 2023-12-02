/**
 *  This is the business logic.
 *  No UI code here.
 *  We focused of "how it works" and not "how it looks".
 *  Think of it as the "brain" of the app. It knows how to do things.
 *  It does not know how to show things.
 */

// Start with an empty list of tasks
const list = [
  {
    id: 1,
    title: 'Buy milk',
    completed: true
  },
  {
    id: 2,
    title: 'Buy bread',
    completed: false
  },
  {
    id: 3,
    title: 'Buy butter',
    completed: true
  },
];

/**
 *  This function accept a task (plain string),
 *  Generates a unique id for the task (simple random number just for the demo),
 *  Create an object with the task title, the id and a flag to indicate if the task is completed or not,
 *  and add the object to the list.
 *  Finally, return the item object.
 */

const taskService = (function (){
  const list = [
    {
      id: 1,
      title: 'Buy milk',
      completed: true
    },
    {
      id: 2,
      title: 'Buy bread',
      completed: false
    },
    {
      id: 3,
      title: 'Buy butter',
      completed: true
    },
  ];
  function addItemsToList(task) {
    // create unique id for each task
    const uid = (Math.floor(Math.random() * 100));

    // create an object with the task details -use the provided title and id
    const item = {id: uid, title: task, completed: false};

    // add the object to the list
    list.push(item);

    // we will need to use it later to locate the task in the list
    return item;
  }


  /**
   * This function accept a task id, and a new title.
   * It will find the task in the list, and update the title.
   */
  function updateTaskTitle(taskId, newTitle) {
    const item = getTaskByTaskId(taskId);

    item.title = newTitle;
  }

  /**
   * This function accept a task id.
   * It will find the task in the list, and remove it from the list.
   */
  function removeItemFromList(taskId) {
    const index = list.findIndex(function (item) {
      return item.id === taskId;
    });

    list.splice(index, 1);
  }


  function clearAllCompletedTasks() {
    const completedTasks = list.filter(function (item) {
      return item.completed === true;
    });

    completedTasks.forEach(function (item) {
      removeItemFromList(item.id);
    });
  }

  function toggleIsDoneTask(taskId){
    const item = getTaskByTaskId(taskId);
  }

  function getTaskByTaskId(taskId){
    return list.find(function(item){
      return item.id ===taskId;
    })
  }

  return {
    list,
    addItemsToList,
    updateTaskTitle,
    removeItemFromList,
    clearAllCompletedTasks,
    toggleIsDoneTask
  };

})();

//** TESTING THE CODE **//

// console.log(list);
//
//
// const buyMilk = addItemsToList('Buy milk');
//
// console.log(list);
//
// updateTaskTitle(buyMilk.id, 'Buy milk and bread');
//
// console.log(list);
//
// removeItemFromList(buyMilk.id);
//
// console.log(list);

const express = require("express");
const router = express.Router();
const {getAllTasks,getTask,updateTask,deleteTask,createTask} = require("../controllers/tasks");

console.log(getAllTasks);
// fetch all the tasks
router.get('/',getAllTasks);
// create a new task
router.post('/',createTask);
// get single task by id
router.get('/:id',getTask);
// update single task by id
router.patch('/:id',updateTask);
// delete single task by id
router.delete('/:id',deleteTask);

// export
module.exports = router
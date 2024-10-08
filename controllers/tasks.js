const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../middleware/custom-errors');
// logic for fetch all task 
const getAllTasks = asyncWrapper(async (req,res)=>{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
})
// logic for create single task
const createTask = asyncWrapper(async (req,res) => {
        const task = await Task.create(req.body);
        res.status(200).json({task});
})
// logic for fetch single
const getTask = asyncWrapper( async (req,res,next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
           return next(createCustomError(`no task with id: ${taskID}`,404));
        }
        res.status(200).json({task});
})
// logic for update a task
const updateTask = asyncWrapper(async (req,res,next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true});
        if(!task)
                return next(createCustomError(`no task with id: ${taskID}`,404));
        res.status(200).json({task}); 
})
// logic for delete a task
const deleteTask = asyncWrapper(async (req,res,next) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task)
                return next(createCustomError(`no task with id: ${taskID}`,404));
        res.status(200).json({task});
   
})
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
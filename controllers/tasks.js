const Task = require('../models/Task');

// logic for fetch all task 
const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
// logic for create single task
const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body);
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
// logic for fetch single
const getTask = async (req,res) => {
    try{
        const task = await Task.findOne({_id:req.params.id});
        if(!task)
            return res.status(404).json({msg:"no such task exist"});
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
// logic for update a task
const updateTask = async (req,res) => {
    try{
        const {id:taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true});
        if(!task)
            return res.status(404).json({msg:"no such task exists"});
        res.status(200).json({task}); 
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
// logic for delete a task
const deleteTask = async (req,res) => {
    try{
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId});
        if(!task)
            return res.status(404).json({msg:"no such task exist"});
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
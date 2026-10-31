const ToDoModel=require('../models/ToDoModel');

module.exports.getToDo=async(req,res)=>{
    const toDo=await ToDoModel.find();

    res.send(toDo);
}

module.exports.saveToDo=async(req,res)=>{

    const {type}=req.body;

    ToDoModel
    .create({type})
    .then((data)=>{
        console.log("added successfully...",data)
        res.send(data)
    })
     
   
}

module.exports.updateToDo=async(req,res)=>{
    const {_id,type}=req.body;
    ToDoModel
    .findByIdAndUpdate(_id,{type})
    .then((data)=>{
        res.send("updated successfully...")
       
    })  
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then((data)=>{
        res.send("deleted successfully...")
       
    })  
    .catch((err)=>{
        console.log(err)
    })
}
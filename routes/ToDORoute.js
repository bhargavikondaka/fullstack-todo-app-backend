const {Router}=require("express");
const {getToDo}=require("../controllers/ToDoController");
const {saveToDo}=require("../controllers/ToDoController");
const {updateToDo}=require("../controllers/ToDoController");
const {deleteToDo}=require("../controllers/ToDoController");

const router=Router();

router.get("/",getToDo)
router.post("/save",saveToDo)
router.put("/update",updateToDo)
router.delete("/delete",deleteToDo)



module.exports=router;
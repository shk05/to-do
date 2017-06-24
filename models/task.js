var mongoose = require("mongoose");
var taskSchema = new mongoose.Schema({

	to_do : {type : String, required : true}
	
});
module.exports = mongoose.model("task",taskSchema, "taskSchema");

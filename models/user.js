var mongoose = require("mongoose");
var to_do_userSchema = new mongoose.Schema({

	username : {type : String, required : true},
	email : {type : String},
	password : {type : String}
	
});
module.exports = mongoose.model("user",to_do_userSchema, "to_do_userSchema");

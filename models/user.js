var ObjectId, Schema, checkinSchema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;

checkinSchema = new Schema({
	firstname: String,
	lastname: String,
	email: String,
	password: String,
	friends: Array,
	date: { type: Date, default: Date.now }
},
{collection: "users"});

module.exports = mongoose.model('User', checkinSchema);
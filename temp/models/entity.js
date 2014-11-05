var ObjectId, Schema, checkinSchema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;

checkinSchema = new Schema({
	userId: [Schema.Types.ObjectId],
	message: String,
	doing: String,
	location: {type: [], index: '2d'},
	date: { type: Date, default: Date.now }
},
{collection: "checkin"});

module.exports = mongoose.model('Checkin', checkinSchema);
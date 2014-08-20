var ObjectId, Schema, checkinSchema, mongoose;

mongoose = require('mongoose');

Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;

checkinSchema = new Schema({
  message: String,
  description: String,
  location: {type: [], index: '2d'},
  date: { type: Date, default: Date.now }
},
{collection: "checkin"});

module.exports = mongoose.model('Checkin', checkinSchema);

// var ObjectId, Schema, entitySchema, mongoose;

// mongoose = require('mongoose');

// Schema = mongoose.Schema;

// ObjectId = Schema.ObjectId;

// entitySchema = new Schema({
//   entity_id: { type: ObjectId, index: true },
//   type: { type: String, default: "entity" },
//   what: String,
//   detail: String,
//   resources: Array, // [urls]
//   where: Array, // [lat,lng]
//   when: Date,
//   who: String,
//   createddate: { type: Date, default: Date.now }
// },
// {collection: "flocate.entities"});

// module.exports = mongoose.model('Entity', entitySchema);
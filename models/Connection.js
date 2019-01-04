const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const GoalSchema = new Schema({
  weight: Number,
  lose: Number,
  date: Number,
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});
// module.exports = User = mongoose.model("users", UserSchema);
const User = mongoose.model("users", UserSchema);
const Goal = mongoose.model("goals", GoalSchema);
module.exports = mongoose;
//module.exports = Goal = mongoose.model("goals", GoalSchema);

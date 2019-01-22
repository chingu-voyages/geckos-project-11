const express = require("express");
const router = express.Router();
const mongoose = require("../../models/Connection");
// Load Goals model
const Goal = mongoose.model('goals');
// CRUD functionality for Goals


//get all goals
router.get("/all", (req, res) => {
    Goal.find({})
    .then((goal) => {
        res.json(goal)
    })

});
// get goals of a user
// path would be api/goals/user/all
router.get('/user/all', (req,res) => {
  const userId = req.body.userId;
    Goal.find({ "user.$oid" : userId })
    .then((goal) => {
      res.json(goal)
    })
});
// if goal already exists for user update it, if none exist then create the initial goal.
//upsert tells Mongo to create the entry if the query can't be matched
router.post('/update', (req, res) => {
  const query = {"user.$oid" : req.body.userId};
  const update = req.body
  Goal.findOneAndUpdate(
    query,
    update,
    {upsert:true, new:true},
    function(error, result) {
      if (error) return res.send(500, {error});
      return res.send("Success!");
    }
  )
})

// create goal
// router.post('/new', (req, res) => {
//     Goal.create(req.body)
//         .then((goal) => {
//             res.json(goal)
//         })
// });

module.exports = router;

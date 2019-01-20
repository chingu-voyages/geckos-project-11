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
})
// router.post('/goals/:_id/updategoal', function(req,res){
//     Goal.findOneAndUpdate({_id: req.params._id},req.body,{new: true})
//         .then((goal) => {
//             res.json(goal)
//     })
//   });
// create goal
router.post('/new', (req, res) => {
    Goal.create(req.body)
        .then((goal) => {
            res.json(goal)
        })
});

module.exports = router;

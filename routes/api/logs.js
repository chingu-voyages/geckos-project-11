const express = require("express");
const router = express.Router();
const mongoose = require("../../models/Connection");
// Load Logs model
const Log = mongoose.model('logs');
// CRUD functionality for Logs


//get all logs
router.get("/all", (req, res) => {
    Log.find({})
    .then((log) => {
        res.json(log)
    })

});
// get all logs of a user
// path would be api/logs/user/user/all
router.get('/user/all', (req,res) => {
  const userId = req.body.userId;
    Log.find({ "user.$oid" : userId })
    .then((log) => {
      res.json(log)
    })
})
// create log
router.post('/new', (req, res) => {
    Log.create(req.body)
        .then((log) => {
            res.json(log)
        })
});
//remove log
router.post('/remove', (req, res) => {
  const refID = req.body.refID;
    Log.deleteOne({ "_id.$oid" : refID })
    .then((log) => {
        res.json(log)
    })
});

module.exports = router;

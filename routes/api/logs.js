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
// path would be api/logs/user/:userID/all
router.get('/users/:userId/all', (req,res) => {
    Log.find({user: req.params.userId})
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

module.exports = router;
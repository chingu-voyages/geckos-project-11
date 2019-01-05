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
// create log
router.post('/new', (req, res) => {
    Log.create(req.body)
        .then((log) => {
            res.json(log)
        })
});

module.exports = router;
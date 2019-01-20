const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const goals = require("./routes/api/goals");
const logs = require("./routes/api/logs");
const app = express();
const cors = require('cors');
const path = require("path");
require("dotenv").config();
app.use(express.static(path.join(__dirname, "tonic-fitness", "build")))
//CORS workaround for localhost
const corsOptions = {
  origin: function (origin, callback) {
    if (origin === "http://localhost:3000" ){
      callback(null, true)
    } else {
      callback(new Error("Not Allowed By CORS"))
    }
  }
}
app.use(cors(corsOptions))

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/goals", goals);
app.use("/api/logs", logs);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "tonic-fitness", "build", "index.html"));
});
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());

app.use(bodyParser.json());
const usersRoute = require("./routes/users");
const servuceRoute = require("./routes/services");
const authRoute = require("./routes/auth");
const appointmentRoute = require("./routes/appointement");

app.use("/appointment", appointmentRoute);
app.use("/users", usersRoute);
app.use("/services", servuceRoute);
app.use("/auth", authRoute);
app.get("/", (req, res) => {
  res.send("we are on home");
});

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to DB!")
);

app.listen(4000, "localhost");

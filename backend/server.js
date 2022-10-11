const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const API_PORT = 3001;
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const cors = require("cors");


const AuthController = require('./Controllers/Auth');
// connects our back end code with the database
const config = require("./config/key");

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

let db = mongoose.connection;

db.once("open", () => console.log("MongoDB connected"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/auth', AuthController);


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

io.on("connection", (socket) => {
  console.log("new client connected");
  socket.emit("connection", null);
});

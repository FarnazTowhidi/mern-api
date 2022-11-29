const io = require('socket.io')(3000, {
  cors: 'origin: [http://localhost:3000]'
  })




const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger("dev"));
app.use(express.json());
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use('/api/users', require('./routes/api/users'));

// Define server socket.io 
io.on('connection', socket=> {
  console.log (socket.id)
  socket.on ('send message', message => {
    socket.broadcast.emit ('recive message')
    // io.emit ("I do not know", message)
    console.log (`You connected with the id {socket.id}`)
  })
})


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.get("/*", function (req, res) {
  // currentDirectory/build/index.html
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

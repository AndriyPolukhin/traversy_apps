const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const usernames = [];
app.get("/", (rqe, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(process.env.PORT || 3000);
console.log(`server running `);

io.sockets.on("connection", socket => {
  console.log("Socket connected");

  socket.on("new user", (data, callback) => {
    if (usernames.indexOf(data) !== -1) {
      callback(false);
    } else {
      callback(true);
      socket.username = data;
      usernames.push(socket.username);
      updateUsernames();
    }
  });

  // Update usernames
  const updateUsernames = () => {
    io.sockets.emit("usernames", usernames);
  };

  // Send message
  socket.on("send message", data => {
    io.sockets.emit("new message", { msg: data, user: socket.username });
  });

  // Disconnect
  socket.on("disconnect", data => {
    if (!socket.username) {
      return;
    }

    usernames.splice(usernames.indexOf(socket.username), 1);
    updateUsernames();
  });
});

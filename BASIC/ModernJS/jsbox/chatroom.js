// Mediator Pattern
const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}


const Chatroom = function () {
  let users = {}; // list of users
  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single User message
        to.recieve(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

// Use the pattern
const andriy = new User('Andriy');
const nastena = new User('Anastasia');
const sasha = new User('Alexandra');

const chatroom = new Chatroom();

chatroom.register(andriy);
chatroom.register(nastena);
chatroom.register(sasha);

andriy.send('Hello Nastena', nastena);
nastena.send('Anruha Privet', andriy);
andriy.send('Hello Everyone');
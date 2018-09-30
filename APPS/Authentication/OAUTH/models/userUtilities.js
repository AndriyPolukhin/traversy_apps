'use strict';
/**
 * MODULE DEPENDENCIES
 */
const UserModel = require('./users');
//=======================================================
/**
 * USER MODEL UTILITY FUNCTIONS
 */
// 1. FIND A USER
function findUser(req, res, next) {
  return UserModel.findOne({ 'local.email': req.params.email }, 'email username', function (err, user) {
    if (err) {
      return next(err);
    }
    if (user == null) {
      return res.status(404).json('User does not exist in the dBase');
    }
    return res.status(200).json(user);
  });
}
// 2. FIND ALL USERS
function viewAllUsers(req, res, next) {
  return UserModel.find({}, function (err, users) {
    if (err) {
      return next(err);
    }
    if (users == null) {
      return res.status(404).json('No users in the dBase');
    }
    return res.status(200).json(users);
  });
}
// 3. Update the user
function updateUser(req, res, next) {
  return UserModel.findOne({ 'local.email': req.params.email }, 'email username password', function (err, user) {
    if (err) {
      return next(err);
    }
    if (user == null) {
      return res.status(404).json('User not found in the dBase');
    }
    user.email = req.body.email || user.email;
    user.username = req.body.username || user.username;
    user.password = user.generateHash(req.body.password) || user.password;
    user.save(function (err, user) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  });
}
// 4. Delete User
function deleteUser(req, res, next) {
  return UserModel.findOneAndRemove({ 'local.email': req.params.email }, 'email username password', function (err, user) {
    if (err) {
      return next(err);
    }
    if (user == null) {
      return res.status(404).json('User not found in the dBase');
    }
    return res.json(user);
  });
};
//=======================================================
/**
 * EXPORT MODULE
 */
module.exports = {
  findUser: findUser,
  viewAllUsers: viewAllUsers,
  updateUser: updateUser,
  deleteUser: deleteUser
};
//=======================================================
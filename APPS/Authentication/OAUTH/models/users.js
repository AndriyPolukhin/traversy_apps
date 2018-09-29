'use strict';
/**
 * MODULE DEPENDENCIES
 */
const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt');
//=======================================================
/**
 * CREATE USER SCHEMA
 */
const UserSchema = mongoose.Schema({
  local: {
    username: String,
    email: {
      type: String,
      unique: true
    },
    password: String
  },
  social: {
    fb: {
      id: String,
      token: String,
      displayName: String,
      email: String,
      photo: String
    },
    twitter: {
      id: String,
      token: String,
      displayName: String,
      handle: String,
      photo: String,
      metaData: {
        location: String,
        description: String
      }
    }
  }
});
//=======================================================
/**
 * CREATE SCHEMA METHODS
 */
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.getSaltSync(10), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};
//=======================================================
/**
 * CREATE USER MODEL
 */
const UserModel = mongoose.model('User', UserSchema);
//=======================================================
/**
 * EXPORT USER MODEL
 */
module.exports = UserModel;
//=======================================================
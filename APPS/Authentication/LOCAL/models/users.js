/**
 * MODULE DEPENDENCIES
 */
const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs');
//===========================================================
/**
 * MODULE VARIABLES
 */
//===========================================================
/**
 * CREATE USER SCHEMA
 */
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  created_on: {
    type: Date,
    default: Date.now
  }
});
//===========================================================
/**
 * SCHEMA METHODS
 */
UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
//===========================================================
/**
 * CREATE USER MODEL
 */
const UserModel = mongoose.model('User', UserSchema);
//===========================================================
/**
 * EXPORT MODULE
 */
module.exports = UserModel;
















'use strict';
/**
 * MODULE DEPENDENCIES
 */
const
  express = require('express'),
  Facebook = require('facebook-node-sdk'),
  config = require('../config/config');
//=======================================================
/**
 * CREATE ROUTER INSTANCE
 */
const router = express.Router();
//=======================================================
/**
 * MODULE VARIABELS
 */
const
  appId = config.fb.appID,
  secret = config.fb.appSecret;
//=======================================================
/**
 * MIDDLEWARE
 */
router.use(Facebook.middleware({
  appId: appId,
  secret: secret
}));
//=======================================================
/**
 * ROUTES
 */
router.get('/', function (req, res) {
  if (req.user.social.db.id) {
    const endPt = '/v2.5/' + req.user.social.fb.id + '/feed';
    req.facebook.api(endPt, function (err, data) {
      if (err) {
        console.error(err);
      }
      return res.json(data);
    });
  }
  else {
    return res.status(403).json('you need a facebook acocunt');
  }
});
//=======================================================
/**
 * EXPORT MODULE
 */
module.exports = router;
//=======================================================
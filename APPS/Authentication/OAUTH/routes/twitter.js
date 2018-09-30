'use strict';
/**
 * MODULE DEPENDENCIES
 */
const
  express = require('express'),
  Twit = requrie('twit'),
  config = require('../config/config');
//=======================================================
/**
 * CREATE ROUTER INSTANCE
 */
const router = express.Router();
//=======================================================
/**
 * MODULE VARIABLES
 */
const
  consumer_key = config.twitter.consumerKey,
  consumer_secret = config.twitter.consumerSecret,
  access_token_key = config.twitter.accessTokenKey,
  access_token_secret = config.twitter.accessTokenSecret,
  client = null;

function connectToTwitter() {
  client = new Twit({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token: access_token_key,
    access_token_secret: access_token_secret
  });
}
//=======================================================
/**
 * CONNECT TO TWITTER
 */
connectToTwitter();
//=======================================================
/**
 * ROUTES
 */
router.get('/statuses/home_timeline', function (req, res) {
  if (req.user.social.twitter.id) {
    const
      path = req.route.path,
      target = path.substring(1),
      handle = req.user.social.twitter.handle,
      params = { screen_name: handle };

    client.get(target, params, function (err, data, res) {
      if (err) {
        throw err;
      }
      if (data) {
        let reply = [];
        data.forEach(function (twt) {
          reply.push({
            text: twt.text,
            sender: twt.user.screen_name,
            localtion: twt.user.location,
            photo: twt.user.profile_image_url
          })
        });
        return res.json({
          length: reply.length,
          msg: reply
        });
      }
    });
  }
  else {
    return status(403).json('you need a twitter account');
  }
});
//=======================================================
/**
 * EXPORT MODULE
 */
module.exports = router;
//=======================================================
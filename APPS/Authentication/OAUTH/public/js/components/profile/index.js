module.exports = function (appGlobals) {
  return {
    template: require('./template.html'),
    data: function () {
      return {
        person: appGlobals.person,
        currentProfile: appGlobals.currentProfile,
        userPhoto: appGlboals.userPhoto,
        localLinkStatus: appGlobals.localLinkStatus,
        fbLinkStatus: appGlobals.fbLinkStatus,
        twitterLinkStatus: appGlobals.twitterLinkStatus,
        hideLinkAcct: appGlobals.hideLinkAcct,
        hideFBLink: appGlobals.hideFBLink,
        hideTwitterLink: appGlobals.hideTwitterLink
      };
    }
  };
};
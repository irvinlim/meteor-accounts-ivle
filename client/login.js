Meteor.loginWithIVLE = function(options, callback) {
    // Method signature to support both (options, callback) and (callback).
    if (! callback && typeof options === "function") {
        callback = options;
        options = null;
    }

    // Apply email domain restrictions.
    if (typeof Accounts._options.restrictCreationByEmailDomain === 'string') {
        options = _.extend({}, options || {});
        options.loginUrlParameters = _.extend({}, options.loginUrlParameters || {});
        options.loginUrlParameters.hd = Accounts._options.restrictCreationByEmailDomain;
    }

    // Request credentials through login form
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    IVLE.requestCredential(options, credentialRequestCompleteCallback);
};

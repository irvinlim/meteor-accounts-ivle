Accounts.addAutopublishFields({
    // Autopublish accessToken and token expiry if user matches the current logged in user
    forLoggedInUser: _.map(IVLE.whitelistedFields.concat(['accessToken', 'expiresAt']), function(fieldName) {
      return 'services.' + IVLE.serviceName + '.' + fieldName
    }),

    // Do not autopublish emails of other users.
    forOtherUsers: _.map(_.without(IVLE.whitelistedFields, 'email'), function(fieldName) {
      return 'services.' + IVLE.serviceName + '.' + fieldName
    }),
});

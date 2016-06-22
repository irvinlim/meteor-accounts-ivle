# IVLE Accounts
A [Meteor](https://www.meteor.com/) login service for NUS IVLE accounts.

## Getting Started
    meteor add irvinlim:accounts-ivle
    meteor add service-configuration

## Basic Usage
On the server, add service configurations for IVLE:

    ServiceConfiguration.configurations.remove({
        service: 'ivle'
    });
     
    ServiceConfiguration.configurations.insert({
        service: 'ivle',
        apiKey: '<API_KEY>'
    });

Make sure that you define your IVLE LAPI key in `settings.json` (or equivalent), instead of checking your API key into version control. If you don't have a key you can request one [here](http://ivle.nus.edu.sg/LAPI/default.aspx).

You can then initiate the OAuth login flow, such as on a button click event, as follows:

    Meteor.loginWithIVLE(function(error) {
        if (error) {
            console.error('Login failed:', error.reason || error);
        } else {
            console.log('Logged in!');
        }
    });

## Acknowledgments
This package was inspired by [this gist](https://gist.github.com/lukasvan3l/355a4fc1968c5f438b85).

## References
- [IVLE LAPI Documentation](https://wiki.nus.edu.sg/display/ivlelapi/Home)

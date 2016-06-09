# IVLE Accounts
A [Meteor](https://www.meteor.com/) login service for NUS IVLE accounts.

## Getting Started
    meteor add irvinlim:accounts-ivle

## Basic Usage
Firstly, make sure that you define your IVLE LAPI key in `settings.json` (or equivalent), as follows. If you don't have a key you can request one [here](http://ivle.nus.edu.sg/LAPI/default.aspx).

    {
      "public": {},
      "private": {
        "oAuth": {
          "ivle": {
            "apiKey": "<YOUR_LAPI_KEY>"
          }
        }
      }
    }

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

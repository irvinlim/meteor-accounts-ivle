Package.describe({
  name: 'irvinlim:accounts-ivle',
  version: '0.0.3',
  summary: 'Login service for NUS IVLE accounts.',
  git: 'https://github.com/irvinlim/meteor-accounts-ivle',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('underscore');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('irvinlim:ivle@0.0.2', ['client', 'server']);

  api.addFiles('client/login.js', 'client');
  api.addFiles('lib/register.js');
  api.addFiles('server/autopublish.js', 'server');
});

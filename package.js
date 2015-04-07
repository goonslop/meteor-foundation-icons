Package.describe({
  name: 'maibaum:foundation-icons',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds meteor support for Foundation Icon Font 3',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maibaum/meteor-foundation-icons.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'https://github.com/maibaum/meteor-foundation-icons/README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
  	'foundation-icons.js',
  	'foundation-icons/foundation-icons.eot',
    'foundation-icons/foundation-icons.svg',
    'foundation-icons/foundation-icons.ttf',
    'foundation-icons/foundation-icons.woff',
    'foundation-icons.css'
    ]
    , 'client');
});

Package.onTest(function(api) {
  api.use('maibaum:foundation-icons');
});

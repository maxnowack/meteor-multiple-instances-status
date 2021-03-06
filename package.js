Package.describe({
  name: 'konecty:multiple-instances-status',
  summary: 'Keep a collection with active servers/instances',
  version: '1.0.6',
  git: 'https://github.com/Konecty/meteor-multiple-instances-status'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use('nooitaf:colors@0.0.2');

  api.addFiles('multiple-instances-status.js', ['server']);

  api.export(['InstanceStatus'], ['server']);
});

Package.onTest(function(api) {

});

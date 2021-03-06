var nforce = require('nforce');
var _      = require('lodash');

require('../')(nforce);

var org = nforce.createConnection({
  clientId: '3MVG9rFJvQRVOvk5nd6A4swCyck.4BFLnjFuASqNZmmxzpQSFWSTe6lWQxtF3L5soyVLfjV3yBKkjcePAsPzi',
  clientSecret: '9154137956044345875',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  mode: 'single',
  username: process.env.SFUSER,
  password: process.env.SFPASS,
  plugins: ['meta']
});

org.authenticate().then(function(){
  return org.meta.listMetadata({
    queries: [
      { type: 'CustomObject' },
      { type: 'CustomField' },
      { type: 'ApexClass' }
    ]
  });
}).then(function(meta) {
  _.each(meta, function(r) {
    console.log(r.type + ': ' + r.fullName + ' (' + r.fileName + ')');
  });
}).error(function(err) {
  console.error(err);
});

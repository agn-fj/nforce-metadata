var nforce = require('nforce');
var _      = require('lodash');
var util   = require('util');

require('../')(nforce);

var org = nforce.createConnection({
  clientId: '3MVG9rFJvQRVOvk5nd6A4swCyck.4BFLnjFuASqNZmmxzpQSFWSTe6lWQxtF3L5soyVLfjV3yBKkjcePAsPzi',
  clientSecret: '9154137956044345875',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  mode: 'single',
  username: process.env.SFUSER,
  password: process.env.SFPASS,
  plugins: ['meta'],
  metaOpts: {
    pollInterval: 5000
  }
});

org.authenticate().then(function(){
  return org.meta.checkDeployStatus({
    asyncProcessId: '0Afd0000001jTaQCAU',
    includeDetails: true
  });
}).then(function(res) {
  console.dir(res);
}).error(function(err) {
  console.error(err);
});

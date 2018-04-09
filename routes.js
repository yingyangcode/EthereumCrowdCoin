const routes = require('next-routes')();
 
// add defines new route mapping
// the first arg is the pattern we want to look for
// we want to look for pattern /campaigns/wildcard
// wildcard is represented by a : followed by the variable name of the campaign address that is passed in
// the second arg is which component from pages do we show when it goes to this route
routes
  .add('/campaigns/new', '/campaigns/new') // this is placed before the one below to avoid being overwritten
  .add('/campaigns/:address', '/campaigns/show') //wildcard overrides default route to new so we add a specific route to new
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;
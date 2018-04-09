'use strict';

var routes = require('next-routes')();

// add defines new route mapping
// the first arg is the pattern we want to look for
// we want to look for pattern /campaigns/wildcard
// wildcard is represented by a : followed by the variable name of the campaign address that is passed in
// the second arg is which component from pages do we show when it goes to this route
routes.add('/campaigns/new', '/campaigns/new') // this is placed before the one below to avoid being overwritten
.add('/campaigns/:address', '/campaigns/show') //wildcard overrides default route to new so we add a specific route to new
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FDRyxBQURILElBQ08sQUFEUCxrQkFDeUIsQUFEekIsa0JBQzJDLEFBRDNDO0NBRUcsQUFGSCxJQUVPLEFBRlAsdUJBRThCLEFBRjlCLG1CQUVpRCxBQUZqRDtDQUdHLEFBSEgsSUFHTyxBQUhQLGdDQUd1QyxBQUh2Qyw2QkFJRyxBQUpILElBSU8sQUFKUCxvQ0FJMkMsQUFKM0M7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJjZWxhbmlzL2tpY2tzdGFydCJ9
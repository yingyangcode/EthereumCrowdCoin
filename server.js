const { createServer } = require('http');
const next = require('next');

const app = next({
  // this tells our app to look at a global env var called NODE_ENV
  // if it is set to production, it will change how next behaves
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(()=>{
  createServer(handler).listen(3000, err => {
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});
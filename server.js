
const connect = require('connect');
const app = connect();

function logger(req, res, next) {
  console.log(req.method, req.url);
  
  next();
}

function helloWorld(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
}

function Goodbye(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('goodbye,Guys!');
}


app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',Goodbye);

app.listen(3000);

console.log('Server running at http://localhost:3000/');

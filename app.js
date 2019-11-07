const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3010;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.all('*', (req, res) => res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Route unavailable on server.',
  }));
  
  app.listen(port);
  console.log(`SERVER IS UP ON PORT ${port}`);

module.exports = app;
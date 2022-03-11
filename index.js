const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

morgan.token('host', function (req, res) {
    return req.hostname;
})

app.get('/', function (req, res) {
    res.send('hello, world!')
  })

app.listen(3000, () => {
    console.debug('App listening on :3000');
});


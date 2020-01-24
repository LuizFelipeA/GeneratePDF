const express = require('express');
const app = express();

const router = require('./routes');

app.use(express.json());
app.use(router);
app.use('*', function (req, res, next) { return res.json({ message: 'Not found route!' }) });

app.listen(3000, function () { return console.log('API is running!') });

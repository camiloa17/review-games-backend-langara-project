require('dotenv').config()
const express = require('express');
const apiRoutes = require('./api/api');
const app = express();
const errorHandler = require('./middleware/errorHandlers');

app.use(express.json());
app.use('/', express.static(`${__dirname}/frontend`));
app.use('/api', apiRoutes);

app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/frontend/index.html`)
});

app.use(errorHandler);

app.listen(process.env.port || 8080, () => {
  console.log('App started in port 8080');
});

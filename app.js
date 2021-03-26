const express = require('express');
const apiRoutes = require('./api/api');
const app = express();
const errorHandler = require('./middleware/errorHandlers');

app.use(express.json())
app.use('/api', apiRoutes);


app.use(errorHandler);


app.listen(8080,()=>{
    console.log('App started in port 8080')
})


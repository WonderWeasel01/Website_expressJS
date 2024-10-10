const express = require('express');
const { dirname } = require('path');
const userRoutes = require('../routes/userRoutes');
const errorHandler = require('../middlewares/errorHandler'); 

const app = express();

const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

app.use(express.json());
app.use(userRoutes); 
app.use(errorHandler); 

app.listen(port, host);




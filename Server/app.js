const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload());


app.use("*",cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));



//Import all routes
const auth = require('./routes/auth');
const welcome = require('./routes/welcome');


app.use('/api/v1', auth);
app.use('/', welcome);



//middleware to handle error
app.use(errorMiddleware)

module.exports = app
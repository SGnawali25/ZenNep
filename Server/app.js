const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const errorMiddleware = require('./middlewares/errors')

app.use(express.json({ limit: "50mb"}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}));
app.use(bodyParser.json({ limit: "50mb"}));
app.use(fileUpload());

app.use("*",cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));



//Import all routes
const auth = require('./routes/auth');
const welcome = require('./routes/welcome');
const place = require('./routes/place');
const story = require('./routes/story');


app.use('/api/v1', auth);
app.use('/', welcome);
app.use('/api/v1',place);
app.use('/api/v1', story)



//middleware to handle error
app.use(errorMiddleware)

module.exports = app
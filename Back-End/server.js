const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    Order = require('./api/models/apiModel'),
    bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors())
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/spedicDB', {useNewUrlParser: true});






 

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/apiRoutes');
routes(app);

console.log("Server started on port:"+port);
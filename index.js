const express = require('express');
const app = express();
const router = require('./src/router/router');
// const createJwt = require('./src/middlewave/jwtConfig');
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit: '500mb' }));
app.use(bodyParser.json());
require('dotenv').config();
app.set('port', process.env.PORT || 4000);
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());

router(app);
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

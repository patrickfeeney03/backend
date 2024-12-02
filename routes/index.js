"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchWeather_1 = require("./fetchWeather");
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    (0, fetchWeather_1.fetchWeather)();
    res.render('index', { title: 'Express with TypeScript' });
});
module.exports = router;

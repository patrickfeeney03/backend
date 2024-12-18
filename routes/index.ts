import { fetchWeather } from "./fetchWeather";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req: any, res: any, next: any) {
  fetchWeather();
  res.render('index', { title: 'Express with TypeScript' });
});

module.exports = router;

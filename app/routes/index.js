var express = require('express'),
  router = express.Router();



var homeController = require('../controllers/home');
var UsersController = require('../controllers/userController');
var jwt = require('express-jwt');
router.get('/home',homeController.home);
router.post('/login', UsersController.login);

/*
 Logout
 */
router.get('/logout',UsersController.logout);
module.exports = router;

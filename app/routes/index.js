var express = require('express'),
  router = express.Router();



var homeController = require('../controllers/home');
var UsersController = require('../controllers/userController');
var jwt = require('express-jwt');

router.use('/login',function(req, res, next) {
  console.log('logger');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




router.get('/home',homeController.home);
router.post('/login', UsersController.login);
router.get('/signup', UsersController.create);
router.get('/logout',UsersController.logout);



var apiRoutes = express.Router();



// verifica el token
var middleware = function(req, res, next) {

  // si es get o post accede al token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode
  if (token) {

    // verifica el token con el secret
    jwt.verify(token,  "StartupWeekend rocks!", function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Fallo al autenticar el token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    //si no existe token
    return res.status(403).send({
      success: false,
      message: 'No token'
    });

  }
};

//router.use('/users',middleware);

router.get('/users',UsersController.all);

module.exports = router;

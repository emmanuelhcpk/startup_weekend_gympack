
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');

exports.create =  function(req, res,next) {//metodo para crear un usuario
  console.log(req.body);
  var username = req.body.username ;
  var password = req.body.password ;

  if (username != '' && password != '') {//si los parametros son difernetes de vacios
    console.log('123123');
    User.findOne({username: username}, function (err, user) {//se verifica que el usuario no exista!
      if(!user) {
        var usuario = new User({username: username, password: password});
        usuario.save(function (err) {
          res.send(usuario.username);
          if(err){console.log('error:', err);}
        });

      }
      else{
        res.send('Usuario previamente registrado');
      }
    })
    console.log('guardado');
  }
};


exports.login = function(req, res,next) {//metodo para el login de usuarios
  //login quemado por efectos de pruebas
  var username = req.body.username || '';
  var password = req.body.password || '';
  console.log(req.body);

  if (username == '' || password == '') {
    return res.send(401);
  }

  User.findOne({username: username}, function (err, user) {
    console.log('usuario',user);
    if (err) {
      console.log(err);
      return res.send(401);
    }
  //console.log(User.hola());
    if(user){//si el usuario existe se compara el pasword
      user.comparePassword(password, function(isMatch) {
        if (!isMatch) {
          console.log("Attempt failed to login with " + user.username);
          return res.send(401);
        }

        var token = jwt.sign(user, "StartupWeekend rocks!", { expiresInMinutes: 60 });
        return res.json({token:token});
      });
    }
    else
    {
      res.json({error:'User Not Found'});
    }

  });
}


exports.all = function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
};



exports.logout= function (req, res, next) {
  res.send('Salir session');
}


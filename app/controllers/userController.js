
var mongoose = require('mongoose'),
  User = mongoose.model('User');


exports.login = function(req, res,next) {
  var username = req.body.username || '';
  var password = req.body.password || '';

  if (username == '' || password == '') {
    //return res.send(401);
  }

  User.findOne({username: username}, function (err, user) {
    if (err) {
      console.log(err);
      return res.send(401);
    }
  //console.log(User.hola());
    User.comparePassword(password, function(isMatch) {
      if (!isMatch) {
        console.log("Attempt failed to login with " + user.username);
        return res.send(401);
      }

      var token = jwt.sign(user, secret.secretToken, { expiresInMinutes: 60 });

      return res.json({token:token});
    });

  });
}

exports.logout= function (req, res, next) {
  db.
  res.send('Salir session');
}


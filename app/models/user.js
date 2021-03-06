var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
// User schema
SALT_WORK_FACTOR = 10;

var User = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true}
});

// antes de guardar UserSchema
User.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//Password verification
User.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(isMatch);
  });
};
mongoose.model('User',User);


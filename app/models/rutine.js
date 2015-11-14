/**
 * Created by emmanuelhcpk on 14/11/15.
 */
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var Rutine = new Schema({
  name: { type: String, required: true },
  reps: { type: Number}
});
mongoose.model('Rutine',Rutine);

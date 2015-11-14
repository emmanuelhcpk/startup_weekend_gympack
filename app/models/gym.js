/**
 * Created by emmanuelhcpk on 14/11/15.
 */
/**
 * Created by emmanuelhcpk on 14/11/15.
 */
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var Gym = new Schema({
  name: { type: String, required: true },
  phone: { type: String},
  addres: { type: String}
});
mongoose.model('Gym',Gym);

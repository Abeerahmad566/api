var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var samsungSchema = mongoose.Schema({
  name: String,
  price: Number,
  picture: String,
  technology:String,
});
var Samsung = mongoose.model("Samsung", samsungSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    price: Joi.number().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports = {Samsung,validateProduct}
